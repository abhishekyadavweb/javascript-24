// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myNewDate = new Date(2023, 1, 23)
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());


// let myNewDate = new Date(2023, 1, 23, 5, 3) 
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());

let myNewDate = new Date("2023-01-14")
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getMonth()} and the time is`

newDate.toLocaleString('default', {weekday: "narrow"})