const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
const studentArray = require("./initialData.js");

app.get("/api/student" , (req,res)=>{
    res.send(studentArray);
})
// app.get("/api/student/:id" , (req,res)=>{
//     const id=req.params.id
//     console.log(typeof studentArray[id])
//     if(id==parseInt(id,10) && studentArray[id-1])
//       res.send(studentArray[id-1]);
//     else
//       res.status(404).send("bad req");
   
// })

app.get("/api/student/:id" , (req,res)=>{
    const id = req.params.id;
    const student = studentArray.find((stud)=>stud.id===Number(id))
    if(student)
    res.send(student);
    else 
    res.sendStatus(404);
})

const isValid = (data)=>data===null || data===undefined ; 

app.post("/api/student" , (req,res)=>{
    let body = req.body
    const {name , currentClass , division} = body;
    if(isValid(name) || isValid(currentClass) || isValid(division))
    res.sendStatus(404);
    else{
        body.id = studentArray.length+1;
        body.currentClass= Number(body.currentClass)
        studentArray.push(body);
        res.send({id: body.id});
    }
})

app.put("/api/student/:id",(req,res)=>{
    const update = req.body;
    const id = req.params.id;
    const matchedIdx = studentArray.findIndex((stud)=>stud.id===Number(id));
    if(matchedIdx===-1) res.sendStatus(400);
    let {name , currentClass , division}=update;
    if(isValid(name) || isValid(currentClass) || isValid(division)) res.sendStatus(400);
    else {
        !isValid(name)?studentArray[matchedIdx].name=name:null;
        !isValid(currentClass)?studentArray[matchedIdx].currentClass=Number(currentClass):null;
        !isValid(division)?studentArray[matchedIdx].division=division:null;
        res.sendStatus(200);
    }
})

app.delete("/api/student/:id" , (req,res)=>{
    const id = req.params.id;
    const matchedIdx = studentArray.findIndex((stud)=>stud.id==id);
    if(matchedIdx==-1) res.sendStatus(404);
    studentArray.splice(matchedIdx , 1);
    res.sendStatus(200);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   