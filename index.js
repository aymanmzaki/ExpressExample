const express = require('express')
let students = require('./data/studentList.json')
const path = require('path')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/students',(req,res)=>{
    res.send(students);
});
app.delete("/",(req,res)=>{
    console.log("Deleteing");
    res.send("Deleted ");
});
app.post("/student",(req,res)=>{
    let st = req.body;
    students.push(st);
    console.log(st);
    res.send("Ok");
});
app.get('/reg',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
});
app.post("/reg",(req,res)=>{
    console.log(JSON.stringify(req.body));
    let data = req.body;
    console.log(`Name : ${data.nme}`);
    console.log(`Name : ${data.eml}`);
    res.status(200).send("OK");
});

app.listen(8787)