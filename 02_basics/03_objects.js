//sinletone
//object.create
 
// object literals

const mySym = Symbol("key1") //interview

const jsUser = {
    name: "abhi",
    // mySym: "myKey1", //itv
    mySym: "myKey1",
    "full name": "Abhi Yadav",
    age : "25",
    location: "Mumbai",
    email: "abhi@google.com",
    isLoggedIn: "false",
    lastLoggedInDays: ["Monday", "Saturday"]
    
}

// console.log(jsUser.name);
// console.log(jsUser.age);
// console.log(jsUser.isLoggedIn);
// console.log(jsUser.full name); //not valid

// console.log(jsUser["name"]);
// console.log(jsUser["age"]);
// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]); //itv 
// console.log(typeof jsUser[mySym]);

jsUser.email = "abhi@apple.com"
// Object.freeze(jsUser)
jsUser.email = "abhi@facebook.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());