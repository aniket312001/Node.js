// npm init
// npm install express 

// when we create custom backend we using Node.js
// we have to handle res.url routing using if else statement  it is lot of pain 
// to overcome from if else , we have "express.js"  it has lot of inbuilt function which is very is easy to use  

const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/home',(req,res)=>{
    res.send("Bye home")
}) 


app.get('/about',(req,res)=>{
    res.send("Bye about")
})

app.post('/this',(req,res)=>{
    res.status(404).send("page not found")  //we can set status
})

app.post('/about',(req,res)=>{
    res.send("Bye post about")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


