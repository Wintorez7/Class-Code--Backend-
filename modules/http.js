import http from 'http'

const server = http.createServer((request,response) => {
    console.log(request.method, "mehtod", request.url, "url");
    if(request.url =="/" && request.mehtod == "get"){
        response.write("Hello world")
        response.end()
    }else if(request.url == "/about" && request.method == "get"){
        response.end("<h1>welcome to about page</h1>")
    }
})

server.listen(4000,() => {
    console.log("server started")
})