import express from 'express'
import path from 'path'

const app = express()

app.get("/", (req,res) => {
    // res.write("Hello")
    // res.end()
    // res.send("hello world")
    //res.send({name:"Rohan"})
    res.sendFile(path.join("E:","All Projects","Backend Class code","expressServer","pages","index.html"))
    
})
app.get("/login",(req,res) => {
    res.sendFile(path.join("E:","All Projects","Backend Class code","expressServer","pages","login.html"))
})


const PORT = 4000
const hostname = 'localhost'
app.listen(PORT,hostname ,() => {
    console.log("Server started in PORT 4000 ")
})
// app.listen(3000,"127.0.0.9",() => {
//     console.log("server is starting in port no. http://127.0.0.9:3000")
// })



















// import http from 'http'


// const server = http.createServer((req,res) => {
//     if(req.url == "/" && req.method == "GET"){
//         res.write("Hello");
//         res.write("world");
//         res.end();
//     }
// })

// server.listen(3000,"127.0.0.1",() => {// http://127.0.0.1:3000
//     console.log("server is Working")
// })