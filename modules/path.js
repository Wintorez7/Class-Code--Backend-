import path from "path"

let pathsr = "./folder/filename.html"

console.log(path.dirname(pathsr));
console.log(path.basename(pathsr));
console.log(path.extname(pathsr));
console.log(path.sep);
console.log(path.join("folder","childFolder","fileName.txt"));