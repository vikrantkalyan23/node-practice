import http from 'node:http';

const hostname ='localhost';
const port = 3001;

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Welcome to Node 111');
});

server.listen(port,hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});