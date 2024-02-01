// var b = 3000
// let a = 100
// if (true) {
//     let a = 10
//     var b = 20
//     const c = 30
//     console.log("Inner: ", a);
//}
// let a = 100
// var b = 300

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

function two(){
        const website = "abhi123"
        console.log(username);
    }
    // console.log(website);
   two()

}
// console.log(username);
// one()

if (true) {
    const username = "abhi"
    if (username === "abhi") {
        const userid = " abhi123"
        // console.log(username + userid);
        
    }
//     console.log(userid);
 }
// console.log(username);

//++++++++++++++intresting+++++++++++++++

console.log(addone(5));  //actionable
function addone(num){
    return num + 1
}
//    addone(5)
//   console.log(addone(5));

// console.log(addTwo(5)); // non actionable
  const addTwo = function(num){
    return num + 2
  }

//   addTwo(5)
//   console.log(addTwo(5));