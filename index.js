const express = require('express');

const bodyParser=require('body-parser');
const dbConnection = require('./connection/db');
const cors=require('cors')
const path=require('path');
//database connection

dbConnection.authenticate().then(()=>{
    console.log('sequelize fine')
}).catch((err)=>{
    console.log('unable to connect database',err)
})

const app = express();

app.use(cors());
//use public folder to serve web pages

app.use(express.static(path.join(__dirname,"public")))
//parse application json
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

//api route
app.use('/api/user',require('./api/user'));

app.get("/*",(req,res)=>res.sendFile(path.join(__dirname,"public/index.html")))

app.listen(3000, ()=>{
    console.log('runing on ...')
})