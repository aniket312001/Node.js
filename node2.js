// modules

// 1.  first step to include module
const fs = require("fs");  //  fs -> file system inbuilt module
let text = fs.readFileSync("b.js","utf-8");  // to read a file 
// console.log(text);

text = text.replaceAll("greet","respect");  // replacing the content and printing it.
console.log(text);

fs.writeFileSync("respect.text",text);  // creating a new file will content 


