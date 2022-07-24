const path = require('path')
var hbs = require('hbs')
const express = require('express')
const app = express()
 



//define path for express config.
const publicDirectoryPath = path.join(__dirname, './public')
 

//setup handlebars engine 
   app.set('view engine','hbs')
    

 const PORT = process.env.PORT || 3000;


//  //setup static directory to serve
  app.use(express.static(publicDirectoryPath))
 

app.get('/',  (req, res)=>{
  res.render('index',{
     name:"Abhishek Kumar"
  })
})

 

app.listen(PORT,()=>{console.log("server started at port "+PORT)})