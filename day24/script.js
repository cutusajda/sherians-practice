let btn = document.querySelector("button");
let main = document.querySelector("main")
btn.addEventListener("click",function(){
    let h1 = document.createElement("h1");
    h1.innerHTML = "Hello User";
    h1.style.color = "white";
    main.appendChild(h1);
    
})