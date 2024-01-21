// primitive

// 7 types : 

            String
            Number
            Boolean
            null
            undefined
            Symbol
            BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

let id = Symbol("123")
let anotherId = Symbol("123")

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId);

// const bigNumber = 1254568987n

// Non primitive(refrence)

// 3 types

                   Array
                   Object
                   Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "abhi",
    age: 25,
}

const myFunction = function(){
  console.log("hello world");
}

console.log(typeof outsidetemp);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof scoreValue);
console.log(typeof score);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);