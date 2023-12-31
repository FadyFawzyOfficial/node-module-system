function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Fady");

// The variables and functions that we defined here, they are not added to the global object.
// They are only a scope to this file. app.js, so they are not available outside of this file.
// And this is because of Node's modular system.
var message = "";
console.log(global.message);

//! 'module' is not global object
//* So in Node, every file is a module, and all the variable & functions defined in that file
//* are a scope to that module, they are not available outside of that module.
console.log(module);

// Path Module
const path = require("path");

const pathObject = path.parse(__filename);

console.log(pathObject);

const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log("Total Memory: " + totalMemory);

// Template String
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", (error, files) =>
  error ? console.log("Error:", error) : console.log("Result:", files)
);

// Use 'const' and not 'var' to prevent modifying the logger variable.
const Logger = require("./logger");
const logger = new Logger();

// Register a Listener
logger.on("messageLogged", (arguments) => {
  console.log("Listener Called", arguments);
});

logger.log("message");

const http = require("http");

// const server = http.createServer();
// server.on("connection", (socket) => console.log("New Connection"));

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello World");
    response.end();
  }

  if (request.url === "/api/courses") {
    response.write(JSON.stringify([1, 2, 3]));
    response.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000 ...");
