const fs = require("fs")

// create file
// async
console.log("start")
fs.writeFile("./demo","hello world", "utf-8", (err) => {
    if(err) console.log(err);
    else console.log("file Created");
})
console.log("Middle")
// sync
fs.writeFileSync("/demo1.txt", "hello world", "utf-8")
console.log("end")

// File Read
fs.readFile("./demo.txt",'utf-8',(err,data) => {
    if(err) console.log(err);
    else console.log(data.toString())

})
let data = fs.readFileSync('./demo.txt','utf-8')
console.log(data)

// fs.appendFile("./demo.txt", data, 'utf-8', (err) => {
//     if(err) console.log(err)
//     else console.log("File Update")
// })

