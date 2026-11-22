import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
const all=[];
function walk(dir){for(const d of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,d.name); if(d.isDirectory())walk(p);else if(/\.(jsx|js)$/.test(p))all.push(p)}}
walk('src');
const strings=new Map();
for(const file of all){const source=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.JSX);function visit(n){if((ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)||ts.isJsxText(n))&&/[\u0600-\u06ff]/.test(n.text)&&!ts.isImportDeclaration(n.parent)){const value=n.text.replace(/\s+/g,' ').trim(); if(!/\.(jfif|png|jpg)$/.test(value)){if(!strings.has(value))strings.set(value,[]);strings.get(value).push(file)}}ts.forEachChild(n,visit)}visit(source)}
fs.writeFileSync('scripts/translation-inventory.json',JSON.stringify([...strings].map(([ar,files],i)=>({id:`text${i+1}`,ar,files:[...new Set(files)]})),null,2));
console.log('Unique Arabic strings:',strings.size);
