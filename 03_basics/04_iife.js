// Immediately Invoke Function Expression

// function chai (){
//     console.log(`DB Connected`);
// }
// chai()
(function chai (){         // names iife
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB also connected ${name}`);
})("abhi")