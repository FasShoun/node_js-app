const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')
const hbs = require('hbs')

const port = 8080 || process.env.port;

let htmlfile = fs.readFileSync('./file/index.html','utf-8');

app.set('view engine','hbs');
const viewpath = path.join(__dirname,"./template");
app.set('views',viewpath);
const partial = path.join(__dirname,"./template/partial")
hbs.registerPartials(partial)

app.get('/',(req,res)=>{
    res.render('index.hbs')
})

app.get('/2nd',(req,res)=>{
    res.status(404).render('index.hbs')
})
app.get('/3nd',(req,res)=>{
    res.send('i am 3rd  go to back type (localhost:8080/)')
})
app.listen(port,()=>{
    console.log('app listen is port' + port)
})