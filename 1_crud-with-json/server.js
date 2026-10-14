import {createServer} from "node:http";

const PORT =process.env.PORT || 3001;
const HOST_NAME='127.0.0.1';

const server = createServer( (req,res)=>{
    res.setStatus=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Welcome to Node');
});

server.listen(PORT,()=>{
console.log(`Server is running on http://${HOST_NAME}:${PORT}/`);
});


