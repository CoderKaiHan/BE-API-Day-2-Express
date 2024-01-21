//Require express at the top of the file
const express = require('express');

//Initialize the app variable
const app = express();

//Create the home page route
//Call app.get()
//Set '/' as the path(first arg)
//Write callback function with req, res
//Call res.send('Hello World')
app.get('/',(req,res)=>(res.send('Hello World')));

//Make a second route
app.get('/second',(req,res)=>(res.send('Welcome to my second page.')));

//Call app.listen(3000) to keep server open
app.listen(3001,()=>(console.log('This is my first express framework.')));