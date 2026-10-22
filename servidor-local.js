const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname,port=8080,mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.json':'application/json'};
const serviceRoutes=new Set(['eletrica','hidraulica','pintura','revestimentos','montagens','reforma','jardinagem-piscina','limpeza-pos-obra']);
http.createServer((req,res)=>{
  let url=decodeURIComponent(req.url.split('?')[0]);
  if(url==='/'||url==='') url='/index.html';
  if(serviceRoutes.has(url.slice(1))) url='/servico-diferenciais.html';
  const file=path.resolve(root,'.'+url);
  const relative=path.relative(root,file);
  if(relative.startsWith('..')||path.isAbsolute(relative)){res.writeHead(403);return res.end('Forbidden')}
  fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data)})
}).listen(port,()=>console.log(`Site Mãos à Obra: http://localhost:${port}`));
