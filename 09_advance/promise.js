

 const promiseOne = new Promise (function (resolve, reject) {
    setTimeout(function(){
        console.log('task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})
 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('task 2 is completed');
        resolve()
    }, 1000)
}).then(function(){
    console.log("promiise 2 consumed");
})
