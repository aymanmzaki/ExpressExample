const express = require('express')
let students = require('./data/studentList.json')

const app = express();
app.use(express.json());

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

app.listen(8787)