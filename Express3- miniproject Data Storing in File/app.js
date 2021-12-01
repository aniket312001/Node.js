// npm init
// npm install express 

// when we create custom backend we using Node.js
// we have to handle res.url routing using if else statement  it is lot of pain 
// to overcome from if else , we have "express.js"  it has lot of inbuilt function which is very is easy to use  

const express = require('express')
const app = express()
const port = 80
const path = require("path")
const fs = require("fs")
const { ppid } = require('process')

// -------------------------------------------------------------------------------
// for serving static files
app.use("/static",express.static('static'))


// ---------------------------------pug template render---------------------------------------------

// PUG
app.set('view engine', 'pug')  // set template engine for pug
app.set("views",path.join(__dirname,"views"))  // set the views directory



app.use(express.urlencoded())  // middleware for getting the data.







app.get('/about',(req, res)=> {
  res.render('demo', { title: 'Hey', message: 'Hello there! about page' })
})
// -------------------------------------------------------------------------------

// End point
app.get('/base', (req, res) => {
  res.send('Hello World!')
})


app.get('/',(req,res) => {
  const param={
    name:"aniket",
    content:"Harry up fill this form for get 50% off !!!"
  }
  res.status(200).render('index.pug',param)
})

app.post('/',(req,res)=>{                 ///   important function taking data and storing in file
  const param={
    name:"aniket",
    content:"Harry up fill this form for get 50% off !!!",
    message:"Your form has been submitted successfully !!"
  }
    console.log(req.body)

    let name = req.body.nm
    let age = req.body.age
    let gender = req.body.gen
    let address = req.body.addr

    let data = `The name is ${name}, age is ${age}, gender is ${gender} is from ${address} \n\n`

    fs.appendFileSync("output.txt",data)




    res.status(200).render('index.pug',param)
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


