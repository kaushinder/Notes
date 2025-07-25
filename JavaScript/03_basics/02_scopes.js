// var c =10;

let a = 200;

if(true){
    let a = 40; // This 'a' is block-scoped
    const b = 50; // This 'b' is block-scoped
    c = 60; // This 'c' is function-scoped or global, not block-scoped
    console.log("Inner: ", a); // 40 
}


console.log(a);
// console.log(b);
// console.log(c);
