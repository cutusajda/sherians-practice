let img = document.querySelector("img");
let like = document.querySelector("#like");

img.addEventListener("dblclick",()=>{
    like.style.opacity = "1";
    like.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"

    setTimeout(()=>{
    like.style.transform = "translate(-50%,-300%) scale(1) rotate(10deg)"

    },800)
    setTimeout(()=>{
        like.style.opacity = "0";
    },1000)

    setTimeout(()=>{
        like.style.transform = "translate(-50%,-300%) scale(0) "

    },1200)
})