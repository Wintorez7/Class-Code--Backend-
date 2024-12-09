import express from 'express'
import multer from 'multer';
import path from 'path'

const app = express();
const PORT = 3000;

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// multer declartion
// const upload = multer({dest:"./assets"})
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"rohan"+path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})

// api
app.get("/",(req,res) => {
    console.log("Server Started")
    res.send("server Started")
})

app.post("/myFile",upload.none(),(req,res) => {
    res.send(req.body)
})

app.post("/image",upload.single("profile"),(req,res) => {
    res.send("image uploader")
})

app.listen(PORT, () =>{
    console.log("Server runing at Port 3000")
})

