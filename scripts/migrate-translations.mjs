import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
const inventory=JSON.parse(fs.readFileSync('scripts/translation-inventory.json','utf8'));
const lines=fs.readFileSync('scripts/english-translations.txt','utf8').replace(/^\uFEFF/,'').trim().split(/\r?\n/);
const translations=new Map(lines.map(line=>{const i=line.indexOf('|');return ['text'+line.slice(0,i),line.slice(i+1)]}));
const en={},ar={};
for(const item of inventory){if(!translations.has(item.id))throw Error('Missing '+item.id);ar[item.ar]=item.ar;en[item.ar]=translations.get(item.id)}
const files=[];
function walk(dir){for(const d of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,d.name);if(d.isDirectory())walk(p);else if(/\.(jsx|js)$/.test(p))files.push(p)}}walk('src');
const templates=[];
for(const file of files){let source=fs.readFileSync(file,'utf8');const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.JSX);const edits=[];
function visit(n){
 if(ts.isTemplateExpression(n)&&/[\u0600-\u06ff]/.test(n.head.text+n.templateSpans.map(s=>s.literal.text).join(''))){let key=n.head.text;const args=[];n.templateSpans.forEach((s,i)=>{key+='{{value'+i+'}}'+s.literal.text;args.push('value'+i+': '+s.expression.getText(ast))});templates.push(key);ar[key]=key;edits.push([n.getStart(ast),n.end,`t(${JSON.stringify(key)}, { ${args.join(', ')} })`]);return;}
 if((ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)||ts.isJsxText(n))&&/[\u0600-\u06ff]/.test(n.text)){
  const key=n.text.replace(/\s+/g,' ').trim();
  if(ar[key] && !ts.isImportDeclaration(n.parent)){
   let replacement=`t(${JSON.stringify(key)})`;
   if(ts.isJsxText(n)) replacement=` {${replacement}} `;
   else if(ts.isJsxAttribute(n.parent))replacement=`{${replacement}}`;
   edits.push([n.getStart(ast),n.end,replacement]);return;
  }
 }
 ts.forEachChild(n,visit);
}visit(ast);
if(edits.length){for(const [start,end,value]of edits.sort((a,b)=>b[0]-a[0]))source=source.slice(0,start)+value+source.slice(end);let relative=path.relative(path.dirname(file),'src/i18n/index.js').replaceAll('\\','/');if(!relative.startsWith('.'))relative='./'+relative;source=`import { t } from ${JSON.stringify(relative)};\n`+source;fs.writeFileSync(file,source)}
}
fs.writeFileSync('src/i18n/ar.json',JSON.stringify(ar,null,2)+'\n');
fs.writeFileSync('src/i18n/en.json',JSON.stringify(en,null,2)+'\n');
console.log('Translated',inventory.length,'entries. Templates still to translate:',JSON.stringify([...new Set(templates)]));
