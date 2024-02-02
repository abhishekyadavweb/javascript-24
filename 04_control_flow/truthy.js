// const userEmail = "abhi@chatgpt.abhi"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("got use email");
}else {
    console.log("dont have user email");
}

// falsy value = false, 0, -0, Bigint 0n, "", null, undefined, Nan

// truthy value = "false", "0", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const empObj = {}

// if (Object.keys(empObj).length === 0) {
//     console.log("object is empty");
// }

// Nullish coalescing operator(??) : null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
// iceTeaPrice  >= 80 ? console.log("less than 80") : console.log("more than 80");
iceTeaPrice  <= 80 ? console.log("less than 80") : console.log("more than 80");