function sayMyName(){
    // console.log("a");
    // console.log("b");
    // console.log("h");
    // console.log("i");
}
// sayMyName()

// function addTwoNumber(number1, number2){
// console.log(number1 + number2);
// }
function addTwoNumber(number1, number2){
//  let result = number1 + number2

// //  console.log("abhi");
//    return result

//    console.log("abhi");
return number1 + number2
}


// addTwoNumber(3, 4)
// addTwoNumber(3, "4")
// addTwoNumber(3, "a")
// addTwoNumber(3, null)
const result = addTwoNumber(3, 4)

// console.log("Result: ", result);

function loginUsermessage(userName){
    // if(userName === undefined){
    if(!userName){
console.log("please enter a username");
return
    }

    return `${userName} just logged in`
}
// console.log(loginUsermessage("abhi"))

// +++++++++++++++++++++++++++


// function calculateCartPrise(...num1){
function calculateCartPrise(val1, val2, ...num1){ //it
return num1
}
// console.log(calculateCartPrise(100, 2020, 3030, 1050 ));

const user = {
    username: "abhi",
    prise: '999'
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and prise is ${anyObject.prise}`);
}

// handleObject(user)
handleObject({
    username: "ram",
    prise: 299
})

const myNewArray = [100, 200, 220, 250]

function returnSecondvalue(getArray){
return getArray[2]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([100, 200, 220, 250]));