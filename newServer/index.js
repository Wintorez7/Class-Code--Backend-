import express from 'express'

const app = express();
let PORT = 3000;
let hostName = "127.0.0.5"

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// api
app.get("/",(req,res) => {
    res.send("API Working")
})
// query
app.get("/user",(req,res) => {
    res.send(req.query)
})

// params
app.get("/profile/:name",(req,res) => {
    res.send(req.params)
})
app.post("/data",(req,res) => {
    console.log(req.body);
    res.send("Data received")
})

app.post("/age",(req,res) => {
    let {age} = req.body
    if(age > 18){
        res.send(200)
        res.send({message:"user is eligible for vote"})
    }else{
        res.send({message:"user not eligible"})
    }
})

app.put("/urldata", (req,res) => {
    res.send(req.body)
})

app.listen(PORT,hostName,(req,res) => {
    console.log("Server started at PORT 3000")
})
