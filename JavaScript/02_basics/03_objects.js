// singleton
Object.create({}); // Creates an empty object

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kaushinder",
    "full name": "Kaushinder Singh Raghav",
    [mySym]: "myKey1",
    age: 30,
    location: "India",
    email: "kaushindersinghraghav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "ksr@gmail.com";
// Object.freeze(JsUser); // This will not work as freeze is a method of Object, not JsUser
// console.log(JsUser["email"]);

JsUser.email = "ksr@g.com";
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Js User");
}
// console.log(JsUser.greetings); // calls the function
// console.log(JsUser.greetings()); 

JsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
// console.log(JsUser.greetings())
// console.log(JsUser.greetingsTwo());

console.log(JsUser);