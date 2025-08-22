//What is callback :

//A callback is just a function passed into another function, 
// and it’s executed later (synchronously or asynchronously).

//🔹 1. Simple Callback Example
// function sayHello(name) {
//   console.log("Hello, " + name);
// }

// function processUserInput(callback) {
//   let userName = "Samira";
//   callback(userName); // calling the callback
// }

// processUserInput(sayHello);

// function calculateArea(l, w){
//     return l*w;
// }

// function biggerRoom(callback){
//     if (callback(5,0)>callback(3,5)){
//         console.log("choose first room");
//     }
//     else{
//         console.log("choose second room");
//     }
// }
// function biggerRoom2(){
//     let area1 = 5*0;
//     let area2 = 3*5;
//     if (area1>area2){
//         console.log("choose first room");
//     }
//     else{
//         console.log("choose second room");
//     }
// }

// biggerRoom(calculateArea)


//==============================================================================================================================


//🔹 2. Callback with Parameters

// function greet(name, age) {
//   console.log(`Hello ${name}, you are ${age} years old.`);
// }

// function getUserData(callback) {
//   let userName = "Amira";
//   let userAge = 25;
//   callback(userName, userAge);
// }

// getUserData(greet);


//==============================================================================================================================


//🔹 3. Callback with setTimeout (asynchronous)(function, time in millisecond)

console.log("Start");
console.log("This runs after 4 seconds not in time out ");

setTimeout(() => {
  console.log("This runs after 4 seconds");
}, 4000);

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
// frtch --> db, json, object 
var user = {
    name:"karim", 
    age:24, 
    coursse: "web"
}
console.log(user.name)
// Async/Await 
//==============================================================================================================================


//🔹 4. Callback with Array Methods

// let numbersss = [1, 2, 3, 4];

// numbersss.forEach(num => {
//   console.log(num * 2);
// });


//==============================================================================================================================


//The .map() method in JavaScript creates a new array by calling a callback function on each element of the original array.

// 🔹 Syntax
// array.map(function(element, index, array) {
//   // return new value
// })


// element → current value

// index → current index

// array → the original array

// 🔹 5.1. Simple Example

// let numbers = [1, 2, 3, 4];

// let doubled = numbers.map(function(num) {
//   return num * 2;
// });

// console.log(doubled); // [2, 4, 6, 8]

// 🔹 5.2. Using Arrow Function (shorter)
// let numbers = [1, 2, 3, 4];

// let squared = numbers.map(num => num * num);

// console.log(squared); // [1, 4, 9, 16]

// 🔹 5.3. With Index Parameter
// let names = ["Amira", "Omar", "Laila"];

// let labeled = names.map((name, index) => `${index + 1}. ${name}`);

// console.log(labeled);
// ["1. Amira", "2. Omar", "3. Laila"]

// 🔹 5.4. Using an External Function as Callback
// function addExclamation(word) {
//   return word + "!";
// }

// let words = ["Hi", "Hello", "Welcome"];
// let excitedWords = words.map(addExclamation);

// console.log(excitedWords); 
// ["Hi!", "Hello!", "Welcome!"]

// 🔹 5.5. Practical Example — Extracting Object Property
// let users = [
//   { id: 1, name: "Amira" },
//   { id: 2, name: "Omar" },
//   { id: 3, name: "Laila" }
// ];
// // user = users[0].name
// // user = users[1].name
// // user = users[2].name

// let names = users.map(user => user.name);

// console.log(names); // ["Amira", "Omar", "Laila"]


// ✅ In short:

// .map() takes a callback and runs it for each item.

// It always returns a new array with the transformed values.


//==============================================================================================================================



// //🔹 6. Practical Example — Success & Error Callbacks

// function fetchData(successCallback, errorCallback) {
//   let success = false; // pretend this is a server response

//   if (success) {
//     successCallback("Data loaded successfully!");
//   } else {
//     errorCallback("Failed to load data.");
//   }
// }

// fetchData(
//   (data) => console.log("SUCCESS:", data),
//   (error) => console.log("ERROR:", error)
// );
