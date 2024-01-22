// stack (primitive), heap(non-primitive)

let myName = 'abhi'
let myNewName = myName
myNewName = 'abh'

console.log(myNewName);
console.log(myName);

let userOne = {
    name: "abhi",
    password: "12345",
    email: "abhi@google.com",
}
let userTwo = userOne

userTwo.password = 11111

console.log(userTwo);
console.log(userOne);