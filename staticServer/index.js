import express from 'express'
import path from 'path'

const app = express()

// middleware
app.use(express.static("./public"))

// api
app.get("/",(req,res) => {

    res.sendFile(path.join("E:","All Projects","Backend Class code","staticServer","public","pages","index.html"))
})

app.get("/getuser",(req,res) => {
    res.send({name:"Mohan",age:23})
})

app.post("/postuser",(req,res) => {
    console.log(req.body)
    res.send({msg:"Data receive"})
    
})
// app.get("/index.css", (req , res) => {
//     res.sendFile(path.join("E:","All Projects","Backend Class code","staticServer","public","css","index.css"))
// })

// app.get("/scene1.jpg", (req , res) => {
//     res.sendFile(path.join("E:","All Projects","Backend Class code","staticServer","public","assers","scene1.jpg"))
// })

const PORT = 1000
const hostname = "127.0.0.1"
app.listen(PORT,hostname, () => {
    console.log("server started in " + `http://${hostname}:${PORT}`)
})