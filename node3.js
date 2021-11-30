// synchronous or blocking  -- execute line by line


// Asynchronous or non-blocking  
        // - line by line execution not guaranteed
        // - callbacks will fire

const fs = require("fs");

let text = fs.readFile("b.js","utf-8",(err,data)=>{    // this function will be fired after reading the file by that time next line will be executed   
    // if (err) {throw err};               from documentation 
    console.log(err,data);    // if any error , we can throw error or its null ,  data is the text inside the file  
});  
console.log("This is message");   // here this line will run first    