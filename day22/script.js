let x = [2,3,4,5,6,7,8,9,10];
let [a,b] = x;   // destructuring assignment

let y= x.filter(function (value){
    return value>5;

})

function addunlinmited (...value){
    for(let i=0 ; i<value.length ;i++){
        console.log(value[i])
    }
}

addunlinmited(1,2,3,4,5,6,7)

function abc (...val) {
    abc.array.forEach( function (nums){
        
    })
}
  abc()                         
