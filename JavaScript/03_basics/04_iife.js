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
// 1. function imidiatly execute garna laai iife use garinxa
// 2. for interview --> global scope ko pollution le problem hunasakxa. global scope ko variable or declaration hunxa, tesko pollution bata bachnako laagi iife use garinxa.
