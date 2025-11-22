let h1 = document.querySelectorAll("h1");
console.log(h1);

let arr = [10 , 20, 30, 40, 50];
console.log(arr);
h1.forEach(function(el){
    console.log(el.innerHTML)
})

h1.innerHTML = "bye bye!"
console.log(h1.innerHTML);

// parentnode child node

let parent = document.querySelector(".parent");


console.log(parent.childNodes[0].innerHTML= "Hello")
console.log(parent.childNodes)
