let header = document.getElementById("head");
let paragraph = document.getElementById("para");
let button1 = document.getElementById("but1");
let button2 = document.getElementById("but2");
let button3 = document.getElementById("but3");
let button4 = document.getElementById("but4");
let button5 = document.getElementById("but5");
let button6 = document.getElementById("but6");


button1.addEventListener("click", function(){
    document.body.style.backgroundColor = "red"
    header.style.color = "Blue"
    paragraph.style.color = "yellow"
})

button2.addEventListener("click", function(){
    document.body.style.backgroundColor = "Blue"
    header.style.color = "Red"
    paragraph.style.color = "green"
})

button3.addEventListener("click", function(){
    document.body.style.backgroundColor = "Green"
    header.style.color = "yellow"
    paragraph.style.color = "blue"
})

button4.addEventListener("click", function(){
    document.body.style.backgroundColor = "Yellow"
    header.style.color = "blue"
    paragraph.style.color = "red"
})

button5.addEventListener("click", function (){
    let colors = ["red", "blue", "yellow", "green", "rgb(21, 0, 41)", "rgb(51, 1, 34)", "brown",]
    let color = colors[Math.floor(Math.random()*7)]
    let colour = colors[Math.floor(Math.random()*7)]
    document.body.style.backgroundColor = color
     header.style.color = "white"
     paragraph.style.color = "white"
})

button6.addEventListener("click", function (){
    document.body.style.backgroundColor = "white"
    header.style.color = "black"
    paragraph.style.color = "black"
})



