const http=require('http');


const server=http.createServer((req,res)=>{
    const url=req.url;
    if (url==='/'){
        res.write('<html><head></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head>My first page</head><body><h1>my first node js server</h1></body></html>');
    res.end();
    
});

server.listen(3000);