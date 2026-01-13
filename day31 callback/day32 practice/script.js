function afterDelay(time,cb){
    setTimeout(()=>{
        cb()

    },time)
    

}

afterDelay(2000,()=>{
    console.log("hey")

})


function getUser(name,time){
    setTimeout(()=>{
        cb({id:1,name:"sajda"})

    },time)

}
getUser()