const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('welcome to tayyabs server application');
    res.end('last response');

}).listen(3000,()=>{  
  console.log('server is running at port 3000:');  
}); 