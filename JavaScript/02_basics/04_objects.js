// const tinderUser = new Object();
const tinderUser = {}


tinderUser.id = "123abc";
tinderUser.name = "kaushinder singh";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname:{
            firstName: "kaushinder",
            lastName: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const user = [
    {id: 1, name: "kaushinder singh", age: 25},
    {id: 2, name: "john doe", age: 30},
    {id: 3, name: "jane doe", age: 28}
]
// console.log(user);
// console.log(user[0].name);
//console.log(user[1].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // returns an array of keys
// console.log(Object.values(tinderUser)); // returns an array of values
// console.log(Object.entries(tinderUser)); // returns an array of key-value pairs
// console.log(Object.entries(tinderUser).length);



// console.log(tinderUser.hasOwnProperty("id")); // returns true if the object has the property
// console.log(tinderUser.hasOwnProperty("email")); // returns false if the object does not
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // returns true if the object has the property
// console.log(tinderUser.hasOwnProperty("fullname")); // returns false if the object does not
// console.log(tinderUser.hasOwnProperty("name")); // returns true if the


//  destructuring the object

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: {
        name: "kaushinder singh",
        age: 25,
        isAvailable: true
    }
}

// course.courseInstructor

// const {courseInstructor: instructor} = course;
// // console.log(courseInstructor);
// console.log(instructor);

const {courseInstructor: {name}} = course;
// console.log(courseInstructor);
console.log(name);

// API(Json) response example for single object

// {
//     "name": "kaushinder singh",
//     "course": "JavaScript",
//     "price": "free",
// }

// Api response example with array of objects
// [
//     {},
//     {},
//     {}
// ]