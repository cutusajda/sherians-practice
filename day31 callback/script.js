// callback(cb) ek function hota hai jo turant nhi chlta jb km ho jyea tb chlta hai



function instagramParJaoDataLao(username,cb){
    // logic
    // cb
    setTimeout(()=>{
        cb(console.log("hello m call back"))
    },2000)
    

}

instagramParJaoDataLao("sajda" , function(data){

});



function afterDelay(time , cb){
    setTimeout(()=>{
        cb()

    },3000)

}

afterDelay(3000,function(){
    console.log("first")

});


function getUser(name,cb){
    setTimeout(()=>{
        cb({
            id:1,name:"shela"
        })
    },1000)

}




