import http from 'http'
import fs from "fs"

const server = http.createServer((req,res) => {
    const { method, url} = req
    console.log(method , url);
    if(method == "GET" && url == "/"){
       let data = fs.readFileSync("./pages/index.html")
        res.end(data)
    }else if(method == "GET" && url == "/about"){
        let data = fs.readFileSync("./pages/about.html")
        res.end(data)
    }   
    else if(method == "GET" && url == "/contact"){
        let data = fs.readFileSync("./pages/contact.html")
        res.end(data)
    }else if(method == "GET" && url == "/gallery"){
        let data = fs.readFileSync("./pages/gallery.html")
        res.end(data)
    }else if(method == "GET" && url == "./Css/style.css"){
        let data = fs.readFileSync("./Css/style.css")
        res.end(data)
    }else if(url === "/login" && method === "GET"){
        let data = fs.readFileSync("./pages/login.html")
        res.end(data)
    }
    else if(url === "/loginData" && method === "POST"){
       req.on("data",(data) => {
        let logindata = JSON.parse(data)
        res.write(JSON.stringify({msg:succesfully}))

       })
    }
    
    
})

server.listen(5000,() => {
    console.log("server Started")
})