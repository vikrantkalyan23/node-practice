import {createServer} from "node:http";
import fs from "node:fs";

const PORT = process.env.PORT || 3001;
const NODE_ENV =process.env.NODE_ENV || 'development';
const DATA_FILE = process.env.DATA_FILE || "./data.json";
const HOST_NAME='127.0.0.1';

const server = createServer( (req,res)=>{
    res.setStatus=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Welcome to Node');
});

console.log(PORT);
console.log('Node Environment : ', NODE_ENV);
server.listen(PORT,()=>{
console.log(`Server is running on http://${HOST_NAME}:${PORT}/`);
});


