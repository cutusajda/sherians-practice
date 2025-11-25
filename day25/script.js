let btn = document.querySelector("button");
let main = document.querySelector("main");

let arr = [
  "I am Sajda, and I shine everywhere I go",
  "I am becoming a powerful developer day by day",
  "Mera hardwork mujhe success tak le ja raha hai",
  "I deserve everything I dream of",
  "I trust myself and my journey",
  "No one can stop me from growing",
  "I am proud of the woman I’m becoming",
  "I choose confidence and courage every single day"
];

btn.addEventListener("click",function(){
    let h1 = document.createElement("h1");
    let x = Math.random()*100;
    let y = Math.random()*100;
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    let rotate = Math.random()*360;
    let scale = Math.random()*3
    let a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a];
    h1.style.position = "absolute";
    h1.style.color = "white"
    h1.style.left = `${x}%`;
    h1.style.top = `${y}%`;
    h1.style.rotate = `${rotate}deg`
    h1.style.color = `rgb(${c1},${c2},${c3})`;
    h1.style.scale = scale;
    main.appendChild(h1)
    console.log(arr[a])


})