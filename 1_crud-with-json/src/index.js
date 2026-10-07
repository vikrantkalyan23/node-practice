import {createServer} from 'node:http';

const hostName = 'localhost';
const port = 3001;

const server = createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Server is running ');
});

server.listen(port,hostName, ()=>{
    console.log(`Server is running on http://${hostName}:${port}/`);
});