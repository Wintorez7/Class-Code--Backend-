import express from 'express'
import path from 'path'
import fs from 'fs'

const app = express();

// middleware
app.use(express.urlencoded({extended:true}));

// api(request and response cycle)[communicating with client and server][REST API]
app.get("/",(req,res) => {
    ///res.write("hello");
    //res.send({name:"Rohan"})
     res.sendFile("E:/All Projects/backend Class code 1/revServer/index.html")    
})

app.post("/myform",(req,res) => {
    // console.log(req.url,req.method)
    // res.send("Form submit succesfully")
    // console.log(req.body);
    let studentData = req.body

    let jsonFileData = JSON.parse(fs.readFileSync("./studnet.json","utf-8"))

    jsonFileData.push(studentData)
    
    fs.writeFileSync("./studnet.json",JSON.stringify(jsonFileData))

})

app.listen(3000,"127.0.0.7",(req,res) => {
    console.log("server running in port number 3000")
})