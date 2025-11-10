console.log("hy");
console.warn("becareful");
console.error("u r wrong");
console.info("this is information");
console.table({name:"sajda"})
let x = "sajda is a good girl";
let y = x.slice(0,5);
console.log(y);
console.log(y.split());
console.log(y.split(""));
console.log(x.split())
let z = "sajda behan ksi ho";
console.log(z.replace("a","e"))   //it will only replace the 1st word
console.log(z.replaceAll("a","e")) //it will replace all the replaceable value
console.log(z.includes("f"));

console.log("connected");
let a = "sajda";
var b = "sneha";
const c = "sayantan+sajda";
// a = "sneha";
b= "sam";


let s = {
    namee:"sajda"

};
// console.log(namee);   //it will give us a refference error name is not defined  as it is inside a curly braces and it is a block scope which means it cannot be accessible outside the block or the curly braces


console.log(a);
console.info(b);
console.warn(x);
console.error(y);
console.table(s);
// let d = prompt("plz enter ur name");
// window.alert(`hey ${d} welcome `)
// console.log(typeof d)

// let age = +prompt("plz enter ur age");
// console.log(age+5);
let msg = "i want to be the best developer and inshaAllah i will be the best developer";
let mesg= msg.slice(2,6);
console.log(mesg);
console.log(mesg.split(""))
console.log(mesg.replace("want","will"))
console.log(msg);
console.log(`hey cutie pie ur name is ${a}`);
console.log(msg.includes("will"));
console.log(a,b);  console.log("hy");

console.log("hlo")
console.log("welcome")
console.log("good")
let g = (5+10)*2;
console.log(g);



let age1 = 25;
console.log(age1)
let nameee = "sajda";
console.log(nameee)
let isStudent = true;
console.log(isStudent)
let skills = ["js","HTML"];
console.log(skills[1])
console.log(skills)
let user = {
    city:"Bhopal"
}
console.log(user)
console.log(user.city)
let x1 = null;

console.log(x1)
let saj;
console.log(saj)
let sam = Symbol("id");
console.log(sam);

console.log("sajda"+age1);

console.log(1/0)

console.log(Number("abc"))
console.log(undefined+1)

let xx = 5;
let yy = xx;
yy = 10;
console.log(xx,yy);

let obj = {name:"sajda"};let obj2 = obj;obj2.name = "sherians ";
console.log(obj.name);


let sum1 = 10;
let sum2 = 20
console.log(`adition ${sum1+sum2}`);
console.log(`substreaction ${sum1-sum2}`);
console.log(`multiplication ${sum1*sum2}`);
console.log(`division ${sum1/sum2}`);
console.log(`modulo${sum1%sum2}`);

 console.log(sum1 +=3);
 console.log(sum1+=2);
 console.log(sum1*=2);
 console.log(sum1/=2);

let count = 5;
++count;
console.log(count);
count++
console.log(count)

count--
console.log(count)
--count;
console.log(count);


console.log(5=="5");
console.log(5==="5")

if(10>5 && 10<20 && 10 === 10){
    console.log(" and condition satisfied")
}else{
    console.log(" and condition did not match")
}


if(10>5 || 10<20 || 10 === 10){
       console.log("or condition satisfied")
}else{
    console.log(" or condition did not match")
}

if(!(10>5 )){
    console.log("not")
}

console.log(5>3 && 10>8)
console.log(5 > 3 || 10 < 8);

let aa = 5;
let bb = 1;

console.log("5 & 1 =" , aa & bb);
console.log("5 | 1 = ", aa|bb);


console.log(aaa);
var aaa = 1;

test()
function test(){
    console.log("hello");
}


// sss()
// let sss = function (){
//     console.log("function expression")
// }
//as it will show script.js:163 Uncaught ReferenceError: Cannot access 'sss' before initialization this error as it is inisiled in a variable 

let sajj = 10;
for(let i=sajj; i>0; i--){
    if(i===5 || i===7){}else{
        console.log(i)
    }
    
}

