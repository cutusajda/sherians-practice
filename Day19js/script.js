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
