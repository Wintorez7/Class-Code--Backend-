import express from 'express'
import ejs, { name } from 'ejs'

const app = express();

app.set("view engine","ejs")
app.set("views","E:/All Projects/backend Class code 1/ejsServer/pages")

// api
app.get("/",(req,res) => {
    res.render("home",{ name:"Rohan",address:"Delhi"})
})

app.get("/about",(req,res) => {
    res.render("about",{name:"Ranjan",age:24, foods:["apple","mango","grapes","sweatpotato"]})
})

app.get("./Nav",(req,res) => {
    res.render("Nav")
})

app.listen(4000,"localhost", () => {
    console.log("server is Starting at PORT 4000 ")
})