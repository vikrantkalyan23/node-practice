import {createServer} from 'node:http';

const hostname ="127.0.0.1";
const port =3001;

const server = createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    res.end('Welcome to Node');
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});

