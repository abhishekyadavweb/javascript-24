// if 

const isUserLoggedIn = true
const temperature = 41

// if (2 == "2") {
// if (2 === "2") {
// if (temperature < 40) {
// if (temperature < 50) {
//     console.log("less then 50");
// }else {
//  console.log("temperature is greater than 50");
// }

// console.log("excuted");
// <, >, ==, <=, >=, !=, ===

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000

 // if (balance > 500) console.log("test"), console.log("tst2"), console.log("tst3");
    // if (balance < 500) {
    //     console.log("less than 500");
    // }else if (balance < 750) {
    //     console.log("less than 750");
    // }else if (balance < 900) {
    //     console.log("less than 900");
    // }else if (balance < 1200) {
    //     console.log("less than 1200");
    // }


    const userLoggedIn = true
    const debitcard = true
    const loggedInFromGoogle = true
    const loggedInFromEmail = true

    if (userLoggedIn && debitcard) {
        console.log("allow to buy course");
    }

    if (loggedInFromGoogle || loggedInFromEmail) {
        console.log("user logged in");
    }