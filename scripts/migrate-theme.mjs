import postcss from 'postcss';import fs from 'node:fs';import path from 'node:path';
const files=[];function walk(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){let p=path.join(d,f.name);if(f.isDirectory())walk(p);else if(p.endsWith('.css'))files.push(p)}}walk('src');
let count=0;
for(const file of files){if(file.endsWith('variables.css')||file.endsWith('Preferences.css'))continue;const root=postcss.parse(fs.readFileSync(file,'utf8'));
root.walkDecls(d=>{
 if(d.prop==='direction'&&d.value==='rtl')d.value='inherit';
 if(d.prop==='text-align'&&d.value==='right')d.value='start';
 if(d.prop==='text-align'&&d.value==='left')d.value='end';
 const logical={'margin-right':'margin-inline-start','margin-left':'margin-inline-end','padding-right':'padding-inline-start','padding-left':'padding-inline-end','border-right':'border-inline-start','border-left':'border-inline-end'};
 if(logical[d.prop])d.prop=logical[d.prop];
 if(!/^(color|background|background-color|border.*|fill|stroke)$/.test(d.prop))return;
 const text=['color','fill','stroke'].includes(d.prop),border=d.prop.startsWith('border');
 let v=d.value;
 if(text)v=v.replace(/var\(--color-primary(?:-dark)?(?:,\s*#[0-9a-f]+)?\)/gi,'var(--text-heading)');
 v=v.replace(/#[0-9a-f]{3,8}\b/gi,hex=>{
   let raw=hex.slice(1);if(raw.length===3)raw=raw.split('').map(c=>c+c).join('');if(raw.length!==6)return hex;
   const rgb=[0,2,4].map(i=>parseInt(raw.slice(i,i+2),16));const avg=rgb.reduce((a,b)=>a+b)/3;const spread=Math.max(...rgb)-Math.min(...rgb);
   if(border&&avg>170&&spread<65)return 'var(--border-default)';
   if(text){
     if(avg<100&&rgb[2]>=rgb[0])return 'var(--text-heading)';
     if(avg>=70&&avg<180&&spread<75)return 'var(--text-muted)';
     if(rgb[0]>rgb[2]*1.3&&rgb[1]>rgb[2]*1.2&&avg<180)return 'var(--text-accent)';
   }else if(!border){
     if(avg>250)return 'var(--surface-card)';
     if(avg>225&&spread<45)return 'var(--surface-soft)';
     if(avg>200&&spread<65)return 'var(--surface-raised)';
   }
   return hex;
 });
 if(!text&&!border)v=v.replace(/rgba\(255,\s*255,\s*255,\s*([\d.]+)\)/g,'rgba(var(--surface-rgb), $1)');
 if(v!==d.value){d.value=v;count++}
});fs.writeFileSync(file,root.toString());}
console.log('Updated',count,'color declarations and directional properties.');
