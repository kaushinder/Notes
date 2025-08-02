// var c =10;

let a = 200;

if(true){
    let a = 40; // This 'a' is block-scoped
    const b = 50; // This 'b' is block-scoped
    c = 60; // This 'c' is function-scoped or global, not block-scoped
    // console.log("Inner: ", a); // 40 
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "kaushinder"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
    
}
one();

if(true){
    const username = "kaushinder"
    if(username === "kaushinder"){
        const website = "youtube"
        // console.log(username + website);  
    }

    // console.log(website);
}
// console.log(username);



// +++++++++++++ interesting +++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


// hoisting(can not use var before declaration)
const addTwo = function(num){
    return num + 2
}

addTwo(5);