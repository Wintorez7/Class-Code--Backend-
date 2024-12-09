import express from 'express';
import jwt from 'jsonwebtoken';
import bcyrpt from 'bcrypt'
import { config } from 'dotenv';
config() //for accesing dotenv file value

console.log(process.env.MY_KEY)

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// API
app.get("/",(req,res) => {
    res.send("server started")
})

//generate Token
app.post("/generate",(req,res) =>{
    let user = req.body
    let secretKey = process.env.JWT_SECRET
    let token = jwt.sign(user,secretKey,{ expiresIn:60})
    res.send(token)

})

app.get("/verify",(req,res) => {
    // console.log(req.headers.authorization.split(" ")[i])
    let token = req.headers.authorization.split(" ")[1]
    let data = jwt.verify(token,"rohan123")
    res.send(data)
})

app.post("/signup",(req,res) => {
    // res.send(req.body)
    const{email,password,name} = req.body
    let saltRound = 10
    bcyrpt.hash(password,saltRound,(err,hashedPassword) => {
        // console.log(hashedPassword);
        res.send({email, name, password:hashedPassword})
    })
})

app.post("/login",(req,res) => {
    const {email,password} = req.body
    let hashePass = "$2b$10$/YJkbDI4MJLdec1yOClaROP7RBUQu51bBisNOGfU4fduJxc84aK72"
    bcyrpt.compare(password, hashePass,(err,result) => {
        if(result){
            res.send("login succesfull")
        }else{
            res.send("wrong Password")
        }
    })
})



app.listen(5000,"localhost",() => {
    console.log("Server started at PORT 3000")
})
