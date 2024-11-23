

let getbtn = document.getElementById('btn')
let postbtn = document.getElementById('btn2')

getbtn.addEventListener("click",() => {
    console.log("GET Method")
    fetch("/getuser").then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})

postbtn.addEventListener("click",() => {
    console.log("POST Method")
    let user = {name:"Ranjan", age:23}
    fetch("/postuser",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(user)
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
})