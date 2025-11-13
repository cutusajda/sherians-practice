// for(let i=1;i<21;i++){
//     if(i%2 === 0){
//         console.log(i)
//     }   
// }

// for(let i = 10; i>0; i--){
//     console.log(i)
// }

// for(let i = 5; i>0; i--){
//     console.log("yes")
// }


// for(let i= 1; i<=20;i++){
//     if(i%2 === 0){
//         console.log(`even number ${i}`)
//     }
//     else{
//         console.log(`odd number ${i}`)
//     }
// }


// let x = +prompt("enter the number");
// if(x<0){
//     console.log("your number is a negative number")
// }
// if(x===0){
//     console.log("you have entered 0")

// }
// else{
//    console.log(" your number is a possitive number")
// }




// let age = prompt("enter your age");
// if(age === null){
//     console.error("you have pressed null not a valid input");
// }else if(age.trim() === ""){
//     console.error("you pressed space give the right input")
// }else{
// age=Number(age.trim());
// }
// if(isNaN(age)){
// console.error('sahi age dalo');

// }else if(age<0){
//     console.log("sahi age dalo jadu")

// }
// else if(age>=18){
//     console.log("your age is", age, "and u can vote")
// }else {
//     console.log("u cannot vote")
// }

// for(let i=1; i<11; i++){
//     console.log(`5 X 1 = ${i*5}`)
// }

// counter = 0;
// for(let i = 1; i<16;i++){
//     if(i>8){
//         counter++
//     }

// }
// console.log(counter)



// count = 0
// let password = prompt("enter your password");
// if(password.length>=10 && password.includes("@")){
//     if(count>3){
//           console.error("your password is strong ")
//           count++
//     }
// }else{
//     console.error("check the password")
// }
// console.log(password);



// pass = "sajda";
// let input = prompt("enter your password");
// if(input === null){
//     console.error("you have pressed cancel")
// }else{
//     if(input ===pass){
//         console.log("matched")
//     }else{
//         console.log("not matched")
//     }
// }

// level 2
// let khulgaya = false
// count = 0;
// pass= "sajda";
// let password= prompt("enter your password");
// count++;

// if(password === pass)khulgaya = true

// while(password !==pass){
//     if(count === 3 ){
//         console.error("your account has been locked ");
//         break;
//     }
//     password= prompt("enter your password");
//     if(password === pass)khulgaya = true;
//     count++

// }
// if(khulgaya === true)console.log("welcome sajda")



// let count = 0;
// let pass = "sajda";
// result = false;
// let user = prompt("enter your name");
// count++;
 
// while(user !== pass){
//     if(count === 3){
//         console.error("your account has been locked");
//         break;

//     }else{
//        user = prompt("enter your name");
//        if(user === pass) result = true;
//        count++
//     }
//     if(result === true) console.log("welcome sajda");
// }


// let age = prompt("enter your age");
// age = Number(age);
// if(age === 0){
//     console.error("age cannot be zero plz enter a valid age");}
//     else if(isNaN(age)){
//     console.error("plz enter a valid age");}
//     else if(age<0){
//         console.error("age cannot be negative plz enter a valid age");}
//         else if(age>=18){
//             console.log("your age is", age, "and u can vote");}
//             else {
//                 console.log("u cannot vote");
//         }
    
// console.log(age)
// let count = 0;

// for(let i = 1; i<16;i++){
//     if(i>8){
//         count++
//     }
// }
// console.log(count)




count = 0
let pass = "sajda"
let user = prompt("enter your password");
count++;
while(user !==pass){
    user = prompt("enter your password");
    count++;
    if(count ===3){
        console.error("your account has been locked");
        break;
    }else if(user === pass){
        if(user )
        console.log("welcome sajda")
    }
    else{
        console.error("incorrect password try again")
    }

}



