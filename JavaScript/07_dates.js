// Dates

let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // String representation of the date    
console.log(myDate.toDateString()); // Date in a human-readable format
console.log(myDate.toTimeString()); // Time in a human-readable format
console.log(myDate.toISOString()); // ISO format of the date
console.log(myDate.toLocaleString()); // Locale-specific string representation

console.log(typeof myDate); // "object"

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString()); // Date object for January 23, 2023

let myTimeStamp = Date.now(); // Current timestamp in milliseconds
// console.log(myTimeStamp); // e.g., 1700000000000
// console.log(myCreatedDate.getTime()); // Timestamp for myCreatedDate in milliseconds
// console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

let newDate = new Date();
console.log(newDate); // Current date and time);
console.log(newDate.getDate()); // Day of the month (1-31)
console.log(newDate.getDay()); // Day of the week (0-6, where 0 is Sunday)
console.log(newDate.getFullYear()); // Full year (e.g., 2023)
console.log(newDate.getHours()); // Hour (0-23)
console.log(newDate.getMinutes()); // Minutes (0-59)
console.log(newDate.getMonth()+1); // Month (0-11, where 0 is January)
console.log(newDate.getSeconds()); // Seconds (0-59)
console.log(newDate.getMilliseconds()); // Milliseconds (0-999)


// `${}` syntax for string interpolation
console.log(`Today is ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`); // e.g., "Today is 14/1/2023"    



newDate.toLocaleString('default', {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2023"
    month: 'long', // "January"
    day: 'numeric', // "14"
    hour: '2-digit', // "05"
    minute: '2-digit', // "03"
    second: '2-digit' // "00"
});
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})); // e.g., "Saturday, January 14, 2023, 05:03:00 AM"