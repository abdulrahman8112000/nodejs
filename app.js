const http=require('http');


const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html><head>My first page</head><body><h1>my first node js server</h1></body></html>');
    res.end();
    
});

server.listen(3000);