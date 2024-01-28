// const instauser = new Object()
const instaUser = {}

instaUser.id = "111abh"
instaUser.name = "abhi"
instaUser.isLoggedIn = 'false'

// console.log(instauser);

const regularUser = {
    email: "abhi@google.com",
    fullname:{
        userFullName:{
            firstName : "abhi",
            lastName : "Yadav"
        }
    }
}
// console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {
    name: "abhi",
    email: "abhi@apple.com"
}
const obj2 = {
    // password: "12345",
    userId : "123abh"
}
const obj4 = {
    userName: "a",
    lastUser: "b"
}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);

const user = [
    {
        name: "abhi",
        pass: "12345"
    },
    {
        name: "abhi",
        pass: "12345"
    },
    {
        name: "abhi",
        pass: "12345"
    }
]

// user[1].name
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('name'));
console.log(instaUser.hasOwnProperty('lastname'));