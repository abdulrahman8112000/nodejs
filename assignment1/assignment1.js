const http=require('http');

const server=http.createServer((req,res)=>{
const url=req.url;
if(url==='/'){
    res.write('<html><body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">submit</button></form></body></html>');
    return res.end();
};

if (url==='/users'){
    res.write('<html><body><ul><li>user1</li><li>user2</li></ul></body></html>');
    return res.end();
};

if(url==='/create-user'){
    const data=[];
   req.on('data',(chunk)=>{
    data.push(chunk);
   });
   req.on('end',()=>{
    const parsedData=Buffer.concat(data).toString();
    console.log(parsedData);
   });
   return;
};
});

server.listen(3000);

