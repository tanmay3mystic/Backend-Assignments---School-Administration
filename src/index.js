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
    const student = studentArray.find((stud)=>stud.id==id)
    if(student)
    res.send(student);
    else 
    res.status(404).send("bad req");
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   