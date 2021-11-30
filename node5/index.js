//   Creating Custom backend using Html------------------------------------------


const http = require("http");
const fs = require("fs");  // read file system module

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync("./home.html","utf-8")
const about = fs.readFileSync("./about.html","utf-8")
const services = fs.readFileSync("./services.html","utf-8")
const contact = fs.readFileSync("./contact.html","utf-8")


const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(req.url == "/"){
        res.end(home);
    }
    else if(req.url == "/about"){
        res.end(about);
    }
    else if(req.url == "/service"){
        res.end(services);
    }
    else if(req.url == "/contact"){
        res.end(contact);
    }
    else {
        res.end("404 not found")
    }

  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });