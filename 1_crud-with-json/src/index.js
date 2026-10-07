import { createServer } from "node:http";

const hostName = "127.0.0.1";
const port = 3001;

const server = createServer((req, res) => {
  res.setHeader("content-type", "application/json");

  if(req.method==='GET' && req.url ==='/'){
    res.statusCode = 200;
    res.end(JSON.stringify({
        message:"Welcome To Node"
    }));
    return;
  }

  if(req.method==='GET' && req.url==='/users'){
    res.statusCode=200;
    res.end(JSON.stringify({
        users:[
            {id:1,name:"Vikrant"},
            {id:2,name:"Ankit"}
        ]
    }));
    return;
  }


  res.statusCode = 404;
  res.end(JSON.stringify("Route not found"));
  return;
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}/`);
});
