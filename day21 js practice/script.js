for(let i=1;i<21;i++){
    if(i%2 === 0){
        console.log(i)
    }   
}

for(let i = 10; i>0; i--){
    console.log(i)
}

for(let i = 5; i>0; i--){
    console.log("yes")
}


for(let i= 1; i<=20;i++){
    if(i%2 === 0){
        console.log(`even number ${i}`)
    }
    else{
        console.log(`odd number ${i}`)
    }
}


let x = +prompt("enter the number");
if(x<0){
    console.log("your number is a negative number")
}
if(x===0){
    console.log("you have entered 0")

}
else{
   console.log(" your number is a possitive number")
}




let age = prompt("enter your age");
if(age === null){
    console.error("you have pressed null not a valid input");
}else if(age.trim() === ""){
    console.error("you pressed space give the right input")
}else{
age=Number(age.trim());
}
if(isNaN(age)){
console.error('sahi age dalo');
}else if(age){
    console.log("your age is",age)
}

for(let i=1; i<11; i++){
    console.log(`5 X 1 = ${i*5}`)
}


