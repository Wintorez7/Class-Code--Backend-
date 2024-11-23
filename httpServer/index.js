import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res) => {
    const {url,method} = req
    console.log(url, method)
    if(url === "/" && method === "GET"){
        let data = fs.readFileSync("./pages/index.html")
        res.write(data)
        res.end()
    }else if(url === "/about" && method ==="GET"){
        let data = fs.readFileSync("./pages/about.html")
        res.write(data)
        res.end();
    }else if(url === "/style.css" && method === "GET"){
        let data = fs.readFileSync("./pages/style.css")
        res.end(data)
    }else if(url === "/login" && method === "GET"){
        let data = fs.readFileSync("./pages/login.html")
        res.end(data)
    }
})

server.listen(4000,() => {
    console.log("server is started and running on this port 4000")
})