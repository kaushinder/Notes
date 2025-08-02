// Immediately Invoked Function Expressions (IIFE)
// iife is used to remove global scope polution
// (function definiton)(function call)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();            

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('kaushinder')





// -------------------------------IIFE----------------------------------
// 1. function imidiatly execute karna k liye iife use krte hai
// 2. for interview --> global scope ko pollution ke problem hatana.