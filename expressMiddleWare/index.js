import express from 'express'

const app = express()

// app.use((req,res,next) => {
//     console.log("1st middleware");
//     next()
     
// })

// app.get("/about",(req,res,next) => {
//     console.log("2nd middleware")
//     next()
//     res.send("hello")
// })

// app.get("/",(req,res,next) => {
//     console.log("3rd middleware")
//     next()
// },(req,res,next) => {
//     console.log("middleWare")
//     next()
// },(req,res) => {
//     console.log("Last")
// })

const studentRouter = express.Router()
const trainerRouter = express.Router()

app.use(studentRouter)
app.use(trainerRouter)
app.get("/",(req,res,next)=>{
    res.status(404).send("error")
    

})
studentRouter.get("/student",(req,res) => {
    console.log("hi from student router")
})

trainerRouter.get("/trainer",(req,res) => {
    console.log("hi from trainer router")
})


app.listen(5000,"127.0.0.8", () => {
    console.log("server started in port 5000")
})

// app.use(ThreeHalfMiddleware,FourthMiddleware)










// function FourthMiddleware(req,res,next) {
//     console.log("4th middleWare")
// }

// function ThreeHalfMiddleware(req,res,next) {
//     console.log("4th middleWare")
//     next();
// }