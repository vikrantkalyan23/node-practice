import { createServer } from "node:http";
import fs from "node:fs";

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || "development";
const DATA_FILE = process.env.DATA_FILE || "./data.json";
const HOST_NAME = "127.0.0.1";

let getUsers = () => {
    return JSON.parse(fs.readFileSync(DATA_FILE,"utf8"));
};

let saveUsers = (users) =>{
    fs.writeFileSync(DATA_FILE,JSON.stringify(users,null,2));
}

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Create a User
  if (req.method === "POST" && req.url === "/users") {
    let body="";

    req.on("data", (chunk)=>{
        body +=chunk;
    });

    req.on("end",()=>{
        let users = getUsers();
        let user = JSON.parse(body);

        user.id =Date.now();
        users.push(user);
        saveUsers(users);

        res.statusCode=201;
        res.end(JSON.stringify(user));
    });

    res.statusCode = 201;
    res.end(
      JSON.stringify({
        message: "User created successfully",
      })
    );
    return;
  }

  // Get all Users
  if (req.method === "GET" && req.url === "/users") {
    res.end(JSON.stringify(getUsers()));
    return;
  }

  // Get a User
  if (req.method === "GET" && req.url.startsWith("/users/")) {
    const id = Number(req.url.split("/")[2]);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "User exists",
      }),
    );
    return;
  }

  // Update a User
  if (req.method === "PUT" && req.url.startsWith("/users/")) {
    const id = Number(req.url.split("/")[2]);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "User updated successfully",
      }),
    );
    return;
  }

  // Delete a User
  if (req.method === "DELETE" && req.url.startsWith("/users/")) {
    const id = Number(req.url.split("/")[2]);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "User deleted successfully",
      }),
    );
    return;
  }

  res.statusCode = 404;
  res.end(
    JSON.stringify({
      message: "Route not found",
    }),
  );
});

server.listen(PORT, () => {
  console.log("Environment : ", NODE_ENV);
  console.log(`Server is running on http://${HOST_NAME}:${PORT}/`);
});
