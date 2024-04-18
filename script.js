const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let colorCode = "#"
    for(let i=0;i<=5;i++){
        colorCode += hex[Math.floor(Math.random()*16)]
    }
    return colorCode
}


const body = document.querySelector("body")

const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

let intervalId;

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(function(){
            body.style.backgroundColor = randomColor()
        },500)
    }
}

start.addEventListener('click',startChangingColor)

stop.addEventListener('click',function(){
    clearInterval(intervalId)
    intervalId = null
})

reset.addEventListener('click',function(){
    clearInterval(intervalId)
    body.style.backgroundColor = 'white'
    intervalId = null
})