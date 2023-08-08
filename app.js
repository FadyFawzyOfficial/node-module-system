function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Fady");

// The variables and functions that we defined here, they are not added to the global object.
// They are only a scope to this file. app.js, so they are not available outside of this file.
// And this is because of Node's modular system.
var message = "";
console.log(global.message);
