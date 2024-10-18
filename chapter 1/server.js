/*
How NodeJS is different from vanilla JS
  1) Node runs on a server - not in a browser (backend)
  2) Because of this the console is the terminal window
  3) Instead of the window object we have the global object
  4) Has Common Core modules
  5) CommonJS modules instead of ES6 modules
  6) NodeJS is missing some of the JS APIs, for example fetch. We can install modules to get this APIs so we won't miss anything
*/

console.log("Hello world")
//console.log(global);
console.log("-".repeat(30))

// os module
console.log("os module")

const os = require('os')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log("-".repeat(30))

console.log("Values that we always have access in Node")

console.log(__dirname) // returns the directory where we have te running file
console.log(__filename) // returns the path to the file we are running
console.log("-".repeat(30))

// path module
console.log("path module")

const path = require("path")
console.log(path.dirname(__filename)) // returns the same as __dirname
console.log(path.basename(__filename)) // returns the name and extension of the file
console.log(path.extname(__filename)) //returns the extension
console.log(path.parse(__filename)) // returns an object with all the values we calculated above
console.log("-".repeat(30))

// using our own modules
console.log("Using our own modules")
const math = require('./math')
console.log(math.add(2, 3))
// instead of importing the module as an object we destructure the object exported and then we can use the functions directly
const {add, subtract, multiply, divide} = require("./math") 
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))