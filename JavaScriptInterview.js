// Hey shoaib, how are you?
// Hi, I'm doing good.
// how are you.
//

// Tell me about your self?
// My name is shoaib husain.
// I'm from ratlam.
// About my experience.
// I'have 5 year plus experience in IT industries.
// My primary skile is node js.

// The school prep, Requon and NFT marketplease
// this are the project i worked on recently
//  Requon is job openings management platforms

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1) what is javascript?
//  JavaScript is a client-side script language,
//  it's commonly used to create interactive effects and dynamic content on websites.
//  Node.js, which allows developers to write server-side code in JavaScript.
//  This makes JavaScript a versatile language for full-stack development.
//  it's means your can develop web-side with using single programing laungae
//  You can use Node.js for the backend and
//  React.js or Angular 14+ for the frontend.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2) Data Type
// primitive types :
// console.log(typeof "John Doe"); // Returns "string"
// console.log(typeof 3.14); // Returns "number"
// console.log(typeof true); // Returns "boolean"
// console.log(typeof 234567890123456789012345678901234567890n); // Returns bigint
// console.log(typeof undefined); // Returns "undefined"
// console.log(typeof null); // Returns "object" (kind of a bug in JavaScript)
// console.log(typeof Symbol("symbol")); // Returns Symbol

// Non-primitive types

// Collection of data in key-value pairs

// var obj1 = {
//     x:  43,
//     y:  "Hello world!",
//     z: function(){
//        return this.x;
//     }
//  }

//  // Collection of data as an ordered list

//  var array1 = [5, "Hello", true, 4.1];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Explain Hoisting in javascript.
// 3) Hoisting allows variables and function declarations to be used before they are officially declared in the code.
//
//  Example 1:
// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
// var hoistedVariable;

// Example 2:
// hoistedFunction(); // Outputs " Hello world! " even when the function is declared after calling

// function hoistedFunction() {
//   console.log(" Hello world! ");
// }

// Example 3:
// Hoisting takes place in the local scope as well

// doSomething();

// function doSomething() {
//   x = 33;
//   console.log(x);
//   var x;
// }

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:

// var x;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4) Difference between var , let and const

// Scope: var is function-scoped, while let and const are block-scoped.
// Re-declaration: var can be re-declared, let and const cannot be re-declared in the same scope.
// Assignment: var and let can be reassigned, const cannot be reassigned after initial assignment.

// Example var
// function exampleVar() {
//     console.log(x); // undefined (due to hoisting)
//     var x = 10;
//     console.log(x); // 10
//   }
//   exampleVar();

// Example let
// function exampleLet() {
//     // console.log(y); // ReferenceError: Cannot access 'y' before initialization
//     let y = 20;
//     console.log(y); // 20
//   }
//   exampleLet();

// Example const
// function exampleConst() {
//     const z = 30;
//     // z = 40; // TypeError: Assignment to constant variable
//     console.log(z); // 30

//     const obj = { a: 1 };
//     obj.a = 2; // This is allowed
//     console.log(obj); // { a: 2 }
//   }
//   exampleConst();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// What is NaN property in JavaScript?
// NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
// console.log(isNaN("Hello"))  // Returns true
// console.log(isNaN(345))   // Returns false
// console.log(isNaN('1'))  // Returns false, since '1' is converted to Number type which results in 0 ( a number)
// console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
// console.log(isNaN(false)) // Returns false
// console.log(isNaN(undefined)) // Returns true
// console.log(isNaN(NaN)) // Returns true

// +++++++++++++++++++++++++++++++++++++++++++

// strict Mode mode
// Duplicate arguments are not allowed by developers.
// In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
// The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
// Engineers will not be allowed to create global variables in 'Strict Mode.

// +++++++++++++++++++++++++++++++++++++++++++

// Explain Higher Order Functions in javascript.

// a function who take an other function as argument and retuen a function that type of function we called
// hihger order function
//
// map filter and reduce are the example of hiherorder function

// Example
// function higherOrder(fn) {
//   fn();
// }

// higherOrder(function () {
//   console.log("Hello world");
// });

// Example
// function higherOrder2() {
//   return function () {
//     return "Do something";
//   };
// }
// var x = higherOrder2();
// x(); // Returns "Do something"

// ++++++++++++++++++++++++++++++++++++++++++++

// Explain Scope
// Three type of scope
// Global Scope
// Local or Function Scope
// Block Scope

// Global Scope
// var globalVariable = "Hello world";

// function sendMessage(){
//   return globalVariable; // can access globalVariable since it's written in global space
// }
// function sendMessage2(){
//   return sendMessage(); // Can access sendMessage function since it's written in global space
// }
// console.log(sendMessage2());  // Returns “Hello world”

// Function Scope:
// function awesomeFunction() {
//   var a = 2;

//   var multiplyBy2 = function () {
//     console.log(a * 2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
//   };
// }
// console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

// console.log(multiplyBy2()); // Throws reference error since multiplyBy2 is written in local scope

// Block Scope:

// {
//   let x = 45;
// }

// console.log(x); // Gives reference error since x cannot be accessed outside of the block

// for (let i = 0; i < 2; i++) {
//   // do something
// }

// console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Explain Closures in JavaScript.

// A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's
// scope from an inner function.

// function x(){
// var a =10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function outer(){
//     let a= 10;
//    function inner(){
//     console.log(a);
//    }
//    return inner;
// }
// outer()();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// what is call backfunction javascript
// - A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
// The consumer of a callback-based API writes a function that is passed into the API.
// setTimeout(()=>{
//     console.log("Timmer");
// },1000);

// =========================================================

//  What are the types of errors in javascript?

// Syntax error:
// Logical error:

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// What are arrow functions?

// Arrow functions were introduced in the ES6 version of javascript.
// They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.
// Traditional Function Expression
// var add = function(a,b){
//     return a + b;
//   }

//   // Arrow Function Expression
//   var arrowAdd = (a,b) => a + b;

// Arrow functions are declared without the function keyword.
// If there is only one returning expression then we don’t need to
// use the return keyword as well in an arrow function as shown in the example above.
//  Also, for functions having just one line of code, curly braces { } can be omitted.

// Traditional function expression
// var multiplyBy2 = function (num) {
//   return num * 2;
// };
// // Arrow function expression
// var arrowMultiplyBy2 = (num) => num * 2;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// what is constructor

// In JavaScript, a constructor function is a special type of function that is used 
// to initialize objects created with the new keyword. Here's how constructor 
// functions work and why they are useful:

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;

//     this.displayInfo = function() {
//         return `${this.year} ${this.make} ${this.model}`;
//     };
// }

// let myCar = new Car('Toyota', 'Camry', 2022);
// console.log(myCar.displayInfo()); // Output: 2022 Toyota Camry

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// In JavaScript, a Promise is an object that will produce a single value
//  some time in the future. If the promise is successful, it will prod
// uce a resolved value, but if something goes wrong then it will
//  produce a reason why the promise failed

// Promises are used to handle asynchronous operations like server requests, for ease of understanding,

// var b = 2;
// const a = new Promise((resolve, reject) => {
//   if (b == 1) {
//     resolve(1);
//   } else {
//     reject("error");
//   }
// });

// a.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// }).finally(()=>{
//   console.log(`Experiment completed`);
// });

//state in promise
// Pending
// Fulfilled
// Rejected
// Settled

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What are generator functions?
// In JavaScript, a generator function is a special type of function that can be
// paused and resumed, allowing you to generate a sequence of values over time.
// Generator functions are defined using the function* syntax (with an asterisk *),
// and they use the yield keyword to produce values.

// function* generatorFunction() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = generatorFunction();

// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: undefined, done: true }

// for (let value of generatorFunction()) {
//     console.log(value); // 1, 2, 3
//   }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Purpose: Spread operator is used to spread elements, whereas destructuring is used 
// to unpack values from arrays or properties from objects into variables.

////////////////////////////////////////////////////////////////////////////////////////

// What is Object Destructuring?
// Object destructuring is a new way to extract elements from an object or an array.

// The same example using object destructuring:

// const classDetails = {
//   strength: 78,
//   benches: 39,
//   blackBoard: 1,
// };

// const {
//   strength: classStrength,
//   benches: classBenches,
//   blackBoard: classBlackBoard,
// } = classDetails;

// console.log(classStrength); // Outputs 78
// console.log(classBenches); // Outputs 39
// console.log(classBlackBoard); // Outputs 1

// Example

// const arr = [1, 2, 3, 4];
// const [first,second,third,fourth] = arr;
// console.log(first); // Outputs 1
// console.log(second); // Outputs 2
// console.log(third); // Outputs 3
// console.log(fourth); // Outputs 4

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What is a Temporal Dead Zone?
// Temporal Dead Zone is a behaviour that occurs with
// variables declared using let and const keywords. It is a behaviour
// where we try to access a variable before it is initialized.

// Examples of temporal dead zone:

// x = 23; // Gives reference error

// let x;

// function anotherRandomFunc(){
//   message = "Hello"; // Throws a reference error

//   let message;
// }
// anotherRandomFunc();

//////////////////////////////////////////////////////////////////

// EventEmitter is a class that holds all the objects that can emit events

// const EventEmitter = require("events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("Event emit");
// });

// myEmitter.emit();

///////////////////////////////////////////////////////////////////////////////

// Deep Copy vs Shallow Copy

// Shallow Copy: A shallow copy of an object is a copy where only the top-level
// properties are duplicated, but nested objects or arrays are not.
// Instead, references to the nested objects or arrays are copied, meaning
// changes to nested structures in the copy will affect the original, and vice versa.

// const original = {
//     name: "Alice",
//     age: 30,
//     address: {
//         city: "Wonderland",
//         zip: "12345"
//     }
// };

// // Create a shallow copy using Object.assign()
// const shallowCopy = Object.assign({}, original);

// // Modify the shallow copy
// shallowCopy.name = "Bob";
// shallowCopy.address.city = "Nowhere";

// // The original object is affected by changes to the nested structure
// console.log("Original object:", original);
// console.log("Shallow copy:", shallowCopy);

// Deep Copy: A deep copy, on the other hand, duplicates all levels of the object.
// All nested objects, arrays, and other structures are fully copied,
// resulting in an entirely independent clone.

// Original object with nested properties
// const original = {
//     name: "Alice",
//     age: 30,
//     address: {
//         city: "Wonderland",
//         zip: "12345"
//     },
//     hobbies: ["reading", "chess"]
// };

// // Creating a deep copy using structuredClone
// const deepCopy = structuredClone(original);

// // Modifying the deep copy
// deepCopy.name = "Bob";
// deepCopy.address.city = "Nowhere";
// deepCopy.hobbies.push("gardening");

// // The original object remains unchanged
// console.log("Original object:", original);
// console.log("Deep copy:", deepCopy);

// const original = {
//     name: "Alice",
//     age: 30,
//     address: {
//         city: "Wonderland",
//         zip: "12345"
//     },
//     hobbies: ["reading", "chess"]
// };

// const deepCopy = JSON.parse(JSON.stringify(original));

// // Modify the deep copy
// deepCopy.name = "Bob";
// deepCopy.address.city = "Nowhere";
// deepCopy.hobbies.push("gardening");

// console.log("Original object:", original);
// console.log("Deep copy:", deepCopy);

//////////////////////////////////////////////////////////////////

// function a() {
//   return function () {
//     return function (number) {
//       return number;
//     };
//   };
// }

// let typeInfo = "function";
// let funcInfo = a;
// let count = 0;

// while (typeInfo == "function") {
//   count++;
//   funcInfo = funcInfo(count);
//   typeInfo = typeof funcInfo;
// //   console.log(funcInfo);
//   if (typeInfo == "number") console.log(funcInfo);
// }

///////////////////////////////////////////////////////////////

// // Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the prototype
// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// // Creating instances
// const person1 = new Person('Alice', 25);
// const person2 = new Person('Bob', 30);

// // Calling the greet method, which is defined on the prototype
// person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
// person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.

// Number.prototype.myPrototype = function () {
//   return this + 1;
// };

// let a = 1;
// console.log(a.myPrototype());

// String.prototype.myUpper =  function () {
//     return this.toUpperCase();
// }

// let b = 'shoaib';
// console.log(b.myUpper());

// String.prototype.gretting = function(){
//     return `Hello ${this}`;
// }

// let userName = 'shoaib';
// console.log(userName.gretting());

/////////////////////////////////////////////////////////////////////////////////

// let myPromise = new Promise((resolve, reject) => {
//   if (1 === 2) {
//     resolve(1);
//   } else {
//     reject("Somthing went wrong");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Task completed");
//   });


// let myfunc = async () =>{
//     console.log(await myPromise)
// }
// myfunc();


///////////////////////////////////////////////////////////
// `slice()` creates a new array containing selected elements from the original, 
// while `splice()` modifies the original array by adding, removing, or replacing elements
// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
// console.log("slice");
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.slice(1));
// console.log(arr.slice(8));
// console.log(arr.slice(0,1));
// console.log(arr.slice(1,3));
// console.log(arr);
// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
// console.log("Splice");
// console.log(arr.splice(0,3))
// console.log(arr);
// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");


/////////////////////////////////////////////////////////////////////

// Currying in JavaScript?
// At its core, currying is a functional programming technique that involves breaking down a 
// function that takes multiple arguments into a series of functions that take one argument 
// each. This creates a chain of functions, where each function returns another 
// function until the final result is achieved.

// Normal Function and pure function
// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// const result = add(5,10,15);
// console.log(result);

// Currying function

// function add(num1) {
//     return function (num2) {
//         return function (num3) {
//             return num1 + num2 + num3;
//         }
//     }
// }

// // const result = add(5)(10)(15);
// // console.log(result); //30

// const result = add(5);
// console.log(result); //[Function (anonymous)]


////////////////////////////////////////////////////////////////////////////////

// call, apply, bind
// 1) call
// no need to invoke the function
// you can pass second parameter with help ,

// 2) apply
// no need to invoke the function
// Second parameter array

// 3) bind
//  Need to invoke the function. it's give a copy of functio whice you can invoke later
//  you can pass second parameter with help ,


// let nameObj = {
//     name: "Tony"
// }

// let PrintName = {
//     name: "steve",
// }

// PrintName.sayHi = function (hometown, state) {
//     console.log(`Hi ${this.name} from ${hometown}, ${state}`); // Here "this" points to nameObj 
// }

// PrintName.sayHi.call(nameObj, "Ratlam", "M.P.");  // no need to invoke the function
// //Output:- Hi Tony from Ratlam, M.P.

// PrintName.sayHi.apply(nameObj, ["Indore", "M.P."]); // no need to invoke the function
// //Output:- Hi Tony from Indore, M.P.

// let HiFun = PrintName.sayHi.bind(nameObj, "Pune", "Maharashtra");  // In Bind you need to invoke the function
// HiFun();
// //Output:- Hi Tony from Pune, Maharashtra

/////////////////////////////////////////////////////////////////////////////

// setTimeout :- a function is call after duration time  metioned   as second argument

// function callWithDelay(){
//     console.log("SetTime Out CallWithDelay");
// }

// console.log("1 Console Log");
// let clearTimeoutFunction  = setTimeout(callWithDelay, 0);
// let clearTimeoutFunction1  = setTimeout(callWithDelay, 1000);
// let clearTimeoutFunction3  = setTimeout(callWithDelay, 1000);
// clearTimeout(clearTimeoutFunction) // it's stop the function call
// clearTimeout(clearTimeoutFunction1) // it's stop the function call if you went remove setTimeout function in duration of time

/////////////////////////////////////////////////////////////////////

// function callWithDelay(){
//     console.log("setInterval call");
// }

// setInterval(callWithDelay, 1000); // it's call functin in every 1 second

/////////////////////////////////////////////////////////////////////////////

// setTimeout:

// Purpose: Executes a callback function after a specified delay (in milliseconds).
// Usage: setTimeout(callback, delay)
// Behavior: The callback function is added to the message queue after the specified delay. However, the actual execution timing depends on the event loop's workload.

// setImmediate:

// Purpose: Executes a callback function in the current iteration of the event loop, after I/O events and before setTimeout and setInterval.
// Usage: setImmediate(callback)
// Behavior: The callback is executed during the next tick of the event loop, right after the current operation completes.

// process.nextTick:

// Purpose: Queues a callback function to be executed on the next iteration of the event loop, after the current operation completes.
// Usage: process.nextTick(callback)
// Behavior: The callback is placed at the front of the event queue, ensuring it executes immediately after the current operation completes, before any I/O events or timers.

// console.log('Start');

// setTimeout(() => {
//     console.log('Inside setTimeout callback');
// }, 1000);


// setImmediate(() => {
//     console.log('Inside setImmediate callback');
// });

// process.nextTick(() => {
//     console.log('Inside process.nextTick callback');
// });

// console.log('End');

// OutPut
// Start
// End
// Inside process.nextTick callback
// Inside setTimeout callback
// Inside setImmediate callback

/////////////

// setTimeout(() => {
//     console.log('Inside setTimeout callback');
// }, 0);

// setImmediate(() => {
//     console.log('Inside setImmediate callback');
// });

//Output:- 
// Inside setTimeout callback
// Inside setImmediate callback

//////////////////////////////////////////////////////////////////////////

// this
// console.log(this); // Window object

// Global Context: this refers to the global object (window in browsers).
// Function Context: this refers to the global object or undefined in strict mode.
// Method Context: this refers to the object the method is called on.
// Constructor Context: this refers to the newly created instance.
// Arrow Functions: this lexically inherits from the enclosing scope.


// this.name = 'shoaib';
// const greet = () => {
//     this.name = 'husain';
//     console.log(this.name);
// }
// greet(); // husain

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// this.name = 'shoaib';
// const greet = () => {
//     console.log(this.name);
// }
// greet(); // shoaib

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// var name = 'shoaib';
// const greet = () => {
//     console.log(this.name);
// }
// greet(); // undefined

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// this.name = 'husain'
// const greet = {
//     name:"shoaib",
//     hello : ()=>{
//         console.log(`Hello ${this.name}`);
//     }
// }
// greet.hello(); // husain

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const greet = {
//     name:"shoaib",
//     hello : ()=>{
//         console.log(`Hello ${this.name}`);
//     }
// }
// greet.hello(); // undefined

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const greet = {
//     name: "shoaib",
//     hello: () => {
//         console.log(`Hello ${this.name}`);
//     },
//     hello1: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
// greet.hello(); // undefined
// greet.hello1(); // shoaib

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// this.name = 'husain';

// const greet = {
//     name: "shoaib",
//     hello: () => {
//         console.log(`Hello ${this.name}`);
//     },
//     hello1: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
// greet.hello(); // husain
// greet.hello1(); // shoaib

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// name = 'husain';

// const greet = {
//     name: "shoaib",
//     hello: () => {
//         console.log(`Hello ${this.name}`);
//     },
//     hello1: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }

// on chrome broser
// greet.hello(); // husain
// greet.hello1(); // shoaib

// on node
// greet.hello(); // undefined
// greet.hello1(); // shoaib


//////////////////////////////////////////////////////
// Function Context

// Standalone Function: When a function is called in the global context, 
// this refers to the global object (window in browsers).


// function standaloneFunction() {
//     console.log(this); // Window object
// }
// standaloneFunction();


/////////////////////////////////////////////////////
// Method of an Object: When a function is called as a method of an object, 
// this refers to the object that owns the method.

// const obj = {
//     name:'shoaib',
//     method: function() {
//         console.log(this); // obj
//     }
// };
// obj.method();

//////////////////////////////////////////////////////
// Constructor Function

// When a function is used as a constructor with the new keyword, 
// this refers to the newly created object.
// function Person(name) {
//     this.name = name;
//     console.log(this); // New Person object
// }
// const person = new Person('Alice');


///////////////////////////////////////////////////////

// Arrow Functions
// Arrow functions have a lexical this binding. This means that this inside an 
// arrow function refers to the this 
// value from the surrounding context where the arrow function is defined.

// const obj = {
//     arrowFunc: () => {
//         console.log(this); // Window object (or whatever `this` is in the surrounding context)
//     }
// };
// obj.arrowFunc();

// const obj = {
//     name: 'gulshan',
//     arrowFunc: () => {
//         this.name ='shoaib';
//         console.log(this.name); // Window object (or whatever `this` is in the surrounding context)
//     }
// };
// obj.arrowFunc(); // shoaib

// function Timer() {
//     this.seconds = 0;
//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds); // `this` refers to the Timer instance
//     }, 1000);
// }
// const timer = new Timer();

// function nomalFunc(){
//     this.name = 'arun';
//     const obj = {
//         name: 'gulshan',
//         arrowFunc: () => {
//             // this.name ='shoaib';
//             console.log(this.name); // Window object (or whatever `this` is in the surrounding context)
//         }
//     };

//     return obj;
// }

// let a = nomalFunc()
// a.arrowFunc(); // arun


// function nomalFunc(){
//     this.name = 'arun';
//     const obj = {
//         name: 'gulshan',
//         arrowFunc: () => {
//             this.name ='shoaib';
//             console.log(this.name); // Window object (or whatever `this` is in the surrounding context)
//         }
//     };

//     return obj;
// }

// let a = nomalFunc()
// a.arrowFunc(); // arun


//////////////////////////////////////////////////////////////////////////////////

// what is memory leak in javascipt

// A memory leak in JavaScript occurs when a program retains memory that is no longer needed, 

// example 
// Variables declared without var, let, or const are implicitly global. Global 
// variables remain in memory for the life of the application, leading to potential leaks.

// function createLeak() {
//     leak = "This is a leak"; // 'leak' becomes a global variable
// }


// Uncleared Intervals and Timeouts

// let intervalId = setInterval(() => {
//     console.log("Interval still running");
// }, 1000);

// Forgetting to clear the interval can lead to a memory leak
// clearInterval(intervalId); // This should be called to avoid the leak


// Closures can retain references to variables in their outer scope, 
// leading to memory leaks if not managed properly.

// function createClosure() {
//     let largeArray = new Array(1000000).fill("data");
//     return function() {
//         console.log(largeArray);
//     };
// }

// let closure = createClosure();
// // 'largeArray' remains in memory as long as 'closure' is referenced


//////////////////////////////////////////////////////////////////////////////////


