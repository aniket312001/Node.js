
//   Creating Module and then importing here 


// const average = require("./mod");    // if we exports module directly average
// console.log(average([23,46,2,6]))

const mod = require("./mod");    

console.log(mod);   // all object

console.log(mod.avg([3,55,4,77,22]))
console.log(mod.name);
console.log(mod.friend);


console.log("This is index.js")

