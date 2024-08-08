// // Let’s look at an example where we combine two arrays using the spread operator.
// // Below we have a male and female array containing a few strings each.
// // The combined array combines the expanded male and female array,
// // creating a single array with the contents from both male and female.

// const male = ['Mike', 'Alex', 'Bob'];
// const female = ['Sam', 'Maggie'];
// const combined = [...male, ...female];

// console.log(combined); // will print ['Mike', 'Alex', 'Bob', 'Sam', 'Maggie']

// ///////////////////////////////////////////////////

// // The code snippet below shows a simple while loop that
// // prints the value of i on every iteration
// // and stops when i is equal to 3.

// let i = 0;
// while (i < 3) {
//   console.log(i); // will print 0, 1, and 2
//   i++;
// }

// // 0 1 2

// ///////////////////////////////////////////////////

// // A for loop, on the other hand, is better suited for
// // executing the “loop body” a fixed number of times.
// // The same loop in the previous code snippet can
// // be re-written using a for loop this way:
// // for (let i = 0; i < 3; i++) {
// //     console.log(i); // will print 0, 1, and 2
// // }
// // 0 1 2

// ///////////////////////////////////////////////////
// // Explain the “this” keyword.

// // Global context refers to anything outside of any function – global object.
// // this refers to the window object in web browsers and
// // global object in Node.js applications.

// // in web browsers

// this.name = 'Adam';

// console.log(window.name) // will print 'Adam' in your console

// // in node js

// this.name = 'Adam';
// console.log(this.name); // will print 'Adam' in your console

// // "use strict"

// function callMe() {
//     if (this === undefined) {
//         // true!
//         console.log('true')

//     }
// }
// callMe();

// let user = {
//     name: 'Bob',
//     getName: function() {
//         return this.name;
//     }
// }

// console.log(user.getName()); // will print 'Bob' in your console

// function User(name) {
//     this.name = name;
// }

// User.prototype.getName = function() {
//     return this.name;
// }

// let user = new User('Bob');
// console.log(user.getName()); // will print 'Bob' in your console

// // Indirect invocation is when the callee of the function uses
// // the call or apply keyword to call a function.
// // Both these methods allow passing in the
// // this value (bob and adam in the example below) as a parameter.

// // function sayHello(greeting) {
// //     console.log(`${greeting} ${this.name}`);
// // }

// // let bob = {
// //     name: 'Bob'
// // };
// // let adam = {
// //     name: 'Adam'
// // };

// // sayHello.call(bob, "Hello"); // will print 'Hello Bob' in your console
// // sayHello.call(adam, "Hi"); // will print 'Hi Adam in your console

// ///////////////////////////////////////////////////
// // What are anonymous functions in JavaScript?

// // Example of an anonymous function that is assigned to a variable (sayHello).
// // The function can then be called by calling the variable name (sayHello)
// // with the required arguments.

// // const sayHello = function(name) {
// //     console.log(`Hello ${name}`);
// // }

// // sayHello('Shoaib');

// ///////////////////////////////////////////////////

// // What is hoisting in JavaScript?

// // Hoisting allows functions to be used safely before they are declared.
// // This question will test the candidate’s familiarity with
// // the JavaScript language and how classes, functions, and variables are interpreted by JavaScript.
// // A basic understanding of hoisting can prevent unexpected errors caused by
// // an incorrect order of declaration, initialization, and reference of a property.
// // You may get other JavaScript hoisting interview questions, so study up!

// // Hoisting refers to the process where the interpreter moves the declaration of classes, functions,
// // or variables to the top of their scope, before their execution.

// // sayHello("Sam");

// // function sayHello(name) {
// //   console.log(`Hello ${name}`);
// // }

// // console.log(name); // will print 'undefined' from hoisted var declaration below
// // var name; // declaration
// // name = 'Mike'; // initialization
// // console.log(name); // will print 'Mike' after the previous line (initialization) is executed

// ///////////////////////////////////////////////////

// // What is a callback function in JavaScript?
// // JavaScript runs code sequentially from the top-down.
// // However, sometimes, we need code to run after something
// // has happened (i.e. asynchronous operations).
// // Callback functions are a way to make sure a function runs only after the set of operations is completed.
// // A candidate should be able to explain both
// // how callback functions work and how it relates to asynchronous programming.

// // A callback function is a function passed into another function as an argument.
// // The callback function is then invoked inside the callee to complete an action.

// // const message = function() {
// //     console.log("This message is shown after 3 seconds");
// // }

// // setTimeout(message, 3000);

// ///////////////////////////////////////////////////

// // What are Promises in JavaScript?
// // Promises are an effective way to handle asynchronous operations in JavaScript.
// // You can think of Promises as an alternative to callbacks and events.

// // Promises are ideal for handling multiple asynchronous operations,
// // providing a better flow of control definition and error handling.
// // Let’s look at an example of a Promise that waits for a setTimeout to complete:
// // after some time promise return single value in some time either resolve or reject

// // let timeoutPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve('Promise completed!'); // resolves the promise after 1 second
// //     //   reject('Promise completed!'); // reject the promise after 1 second
// //     }, 1000);
// //   });

// //   timeoutPromise.then((result) => {
// //     console.log(result); // will print 'Promise completed!' after 1 second (when the Promise completes)
// //   }).catch((error)=>{
// //     console.log(error);
// //   });

// ///////////////////////////////////////////////////
// //  What is Promise chaining?
// // Promise chaining is a common requirement when working with multiple Promises that depend on each other.

// // new Promise((resolve) => {
// //     setTimeout(() => resolve(1), 1000);
// //   }).then((result) => {
// //     console.log(result); // will print '1' after 1 second
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //           resolve(2) // modify the value being resolved
// //         }, 1000)
// //     })
// //   }).then((result) => {
// //     console.log(result); // will print '2' after another 1 second
// //     return result;
// //   })

// ///////////////////////////////////////////////////
// // What is Promise.all?
// // Promise.all is a type of Promise that accepts an array of Promises and waits for each Promise to resolve.
// // Promise.all resolves once each of the Promise inputs resolves, emitting an array of results in the then block.
// // A rejected Promise in the input will cause the Promise.all Promise to also get rejected.

// // let Promise1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve(1); // modify the value being resolved
// //   }, 1000);
// // });

// // let Promise2 = new Promise((resolve,reject) => {
// //   setTimeout(() => {
// //     resolve(2); // modify the value being resolved
// //   }, 1000);
// // });
// // Promise.all([Promise1, Promise2])
// //   .then(([result1, result2]) => {
// //     console.log(result1);
// //     console.log(result2);
// //     // result1 contains the result of Promise1
// //     // result2 contains the result of Promise2
// //   })
// //   .catch((error) => {
// //     // when either Promise1 or Promise2 gets rejected
// //   });

// ///////////////////////////////////////////////////

// // Explain async/await in JavaScript.
// // Async and await are special syntax to work with Promises.
// // The async keyword is placed before a
// // function to denote that the function is asynchronous and can be used as a Promise.

// // The await keyword, on the other hand, tells JavaScript to wait for
// // the async operation to complete before proceeding to the next task in the function.
// // The await keyword can only be used in an async function.

// // async function f() {
// //     let promise = new Promise((resolve) => {
// //       setTimeout(() => resolve('Promise resolved!'), 1000)
// //     });

// //     let result = await promise; // waits for 1 second, until the promise resolves
// //     console.log(result); // will print 'Promise resolved!'
// //   }
// //   f();

// ///////////////////////////////////////////////////
// // What is memoization in JavaScript?
// // Memoization is an optimization technique that speeds up your code by storing the results of expensive
// // function calls and reusing the stored result when the same input occurs again.
// ///////////////////////////////////////////////////
// // What is currying in JavaScript?

// // Currying is a transformation of functions that translates a
// // function from callable as f(a, b, c) into callable as f(a)(b)(c).
// // In other words, currying a function means the function takes one argument at a time and returns a new
// // function expecting the next argument. Instead of taking all arguments at the same time,
// // currying decomposes the function into a sequence of functions with a single argument.

// // // regular version
// // const add = (a, b, c)=>{
// //     return a + b + c
// //     }
// //     console.log(add(1, 2, 3)) // will print 6

// //     // curried version
// //     const addCurry =(a) => {
// //         return (b)=>{
// //             return (c)=>{
// //                 return a+b+c
// //             }
// //         }
// //     }
// //     console.log(addCurry(1)(2)(3)) // will print 6

// ///////////////////////////////////////////////////
// // What is typecasting in JavaScript?

// // Typecasting or coercion means to change the data type of a value to another data type. For example,
// // a conversion from a string to an integer or vice versa.

// // Boolean(value) – Casts the input value to a boolean value
// // Number(value) – Casts the input value to a float or integer value
// // String(value) – Casts the input value to a string

// ///////////////////////////////////////////////////
// // What are the various types of errors in JavaScript?
// // There are three types of errors in JavaScript:

// // Syntax errors – Errors that occur at interpretation time such
// // as during the loading of a web page due to incorrect syntax in the code.

// // Runtime errors – Errors that occur during the runtime of the program after
// // it is interpreted by the compiler. Calling functions that don’t exist is a common cause of this type of error.

// // Logical Errors – Errors caused by the code’s logic itself. They are syntactically correct
// // and don’t necessarily cause runtime errors. To think of this in terms of a sentence in
// // the English language – the vocabulary and grammar of the sentence are correct, however,
// // the meaning of the sentence is incorrect.

// ///////////////////////////////////////////////////

// // What is a closure in JavaScript?
// // A closure is an inner function that has access to the variables in the enclosing/outer function’s scope.
// //  The closure has access to variables from three scopes:
// // within its own scope
// // within the enclosing function’s scope
// // global variables

// // function init() {
// //     var name = "Mozilla"; // name is a local variable created by init
// //     function displayName() {
// //       // displayName() is the inner function, that forms the closure
// //       console.log(name); // use variable declared in the parent function
// //     }
// //     displayName();
// //   }
// //   init();

// ///////////////////////////////////////////////////

// // How do you create a shallow copy of an object?
// // Deep copying means that the value of the new variable is disconnected from the original variable while a
// // shallow copy means that some values are still connected to the original variable.

// // First of all, a deep copy is a copy of an object completely disconnected from the original variable.
// // A shallow copy on the other hand is a copy of the original variable where some values are still connected
// // to the original variable.

// // Using the spread operator copy
// // let originalObject = {
// //   name: "Mike",
// //   email: "mike@gmail.com",
// //   address: {
// //     city: 'Ratlam',
// //   },
// // };

// // let user = { ...originalObject };
// // user.address.city = 'Indore';
// // // originalObject.address.city = 'Indore';
// // user.name = 'shoaib';

// // console.log(originalObject);
// // console.log(user);

// // { name: 'Mike', email: 'mike@gmail.com', address: { city: 'Indore' } }
// // {
// //   name: 'shoaib',
// //   email: 'mike@gmail.com',
// //   address: { city: 'Indore' }
// // }
// ///////////////////////////////////////////////////
// // Deep copy
// // let originalObject = {
// //   name: "Mike",
// //   email: "mike@gmail.com",
// //   address: {
// //     city: "Ratlam",
// //   },
// // };

// // let user = JSON.parse(JSON.stringify(originalObject));
// // user.address.city = "Indore";
// // user.name = "shoaib";

// // console.log(originalObject);
// // console.log(user);

// // { name: 'Mike', email: 'mike@gmail.com', address: { city: 'Indore' } }
// // {
// //   name: 'shoaib',
// //   email: 'mike@gmail.com',
// //   address: { city: 'Indore' }
// // }

// ///////////////////////////////////////////////////
// // What is the difference between Object.freeze() and const?
// // const
// // const person = {
// //     name: 'Mike'
// // };

// // // assigning a new value to the variable person will result in an error: "person" is read-only
// // // person = {
// // //     name: 'Bob'
// // // };

// // // updating the properties inside the person variable works
// // person.name = 'Bob';
// // console.log(person); // will print "{ name: 'Bob' }"

// ///////////////////////////////////////////////////

// // let person = {
// //     name: 'Mike',
// // };

// // person.name = 'Bob'; // works, as object is mutable

// // Object.freeze(person);
// // person.name = 'Will' // TypeError: Cannot assign to read-only property of 'name' of object
// // console.log(person); // will print "{ name: 'Bob' }"

// ///////////////////////////////////////////////////
// // What is the difference between .map() and .forEach()?

// // .map() returns a new array with the same length as the original array,
// // where each element is the result of applying a callback function to the original element.

// // .forEach() does not return anything,
// // but it simply executes a callback function on each element of the array.
// // Example:

// // const numbers = [1, 2, 3, 4, 5];

// // const doubledNumbers = numbers.map(num => num * 2);

// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// // numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10

// ///////////////////////////////////////////////////

// // What is the difference between .filter() and .find()?

// // .filter() returns a new array with all elements that pass a certain test provided by a callback function.
// // .find() returns the value of the first element in the array that passes a certain test provided by a callback function.

// // const numbers = [1, 2, 3, 4, 5];

// // const evenNumbers = numbers.filter(num => num % 2 === 0);

// // console.log(evenNumbers); // [2, 4]

// // const firstEvenNumber = numbers.find(num => num % 2 === 0);

// // console.log(firstEvenNumber); // 2

// ///////////////////////////////////////////////////
// // what is rest parameter in js

// let numbers = [1, 2, 3, 4, 5, 6];
// numbers.shift();
// // numbers.unshift(2);

// function sum(...numbers){
//     return numbers.reduce((total,num)=>total+num,0)
// }

// console.log(sum(...numbers));

// numbers.unshift();

// ///////////////////////////////////////////////////

// 0

// const obj1 = { name: "Dheeraj", company: { name: "Gammastack" } }
// const obj2 = { ...obj1, company: { ...obj1.company} }

// obj2.name = "Shoaib"
// obj2.company.name = "Infobean"

// console.log( obj1.company.name )  // Gammastack
// console.log( obj2.company.name )  // Infobean
// ========================
// Hoisting
// sayHello();
// function sayHello(){
//     console.log("Hello");
// }
// console.log(name);
// var name = "shoaib"
// console.log(name);
// ----------------
// var x = 10;
// function sayHello(){
//     console.log("Hello" , x);  //
//     // var x = 20;
// }
// sayHello()
// -------
// array methods
// mutable / immutable
// filter, map, push, pop
// prototype
// ----
// Promise().then(
//     (resolve)=>{ console.log(resolve) },
//     (reject)=>{ console.log(reject) }
// ).catch((error)=>{

// }).finally()
// --

// *
// **
// ***
// ****

// 1 - 200 => 30
// how many times 0 appear
// 10,20,30,40,50,60,70,80,90,100,  => 11
// 101,102,103,104,105,106,107,108,109,110 => 10
// 120,130,140,150,160,170,180,190,200 => 9

// 1 - 100 => 11

// let result = 0
// for ( let i=1; i<=100 ; i++) {
//    // any operator here
// }
// console.log(result)   => 11

// chess
// const players = [
//     { userId: 1, name: 'xyz1'},
//     { userId: 2, name: 'xyz2'},
//     { userId: 3, name: 'xyz3'},
//     { userId: 4, name: 'xyz4'},
//     { userId: 5, name: 'xyz5'},
//     { userId: 6, name: 'xyz6'}
// ]

// const chessTables = [
//     't1',
//     't2',
//     't3',
//     't4'
// ]

// const output = [
//     { userId: 1, name: 'xyz1', table: 't1' },
//     { userId: 2, name: 'xyz2', table: 't1' },
//     { userId: 3, name: 'xyz3', table: 't2' },
//     { userId: 4, name: 'xyz4', table: 't2' },
//     { userId: 5, name: 'xyz5', table: 't3' },
//     { userId: 6, name: 'xyz6', table: 't3' }
// ]

// let arrayList = [
//   { role: "docter" },
//   { role: "enginner" },
//   { role: "reporter" },
//   { role: "docter" },
//   { role: "docter" },
//   { role: "enginner" },
// ];

// let outputArray = [];

// for (let i = 0; i < arrayList.length; i++) {
//   let roleIndex = outputArray.findIndex(
//     (element) => element.role === arrayList[i]["role"]
//   );
//   if (roleIndex >= 0) {
//     outputArray[roleIndex]["count"] = outputArray[roleIndex]["count"] + 1;
//   } else {
//     outputArray.push({ role: arrayList[i]["role"], count: 1 });
//   }
// }

// console.log(outputArray);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// [
//   {
//       name: "Gulshan",
//       age: 30,
//       email: "gulshan@example.com"
//   },
//   {
//       name: "Arun",
//       age: 27,
//       email: "arun@example.com"
//   },
//   {
//       name: "Shoaib",
//       age: 26,
//       email: "shoaib@example.com"
//   }
// ]

// let array = [2, 4, 5, 6, 7, 1, 5, 7];
// let sortArray = [];
// for(let i =0;i<array.length;i++){
//   let highestNumber = array.reduce((current, highest)=> current > highest? current:highest);
//   sortArray.push(highestNumber);
//   let index = array.indexOf(highestNumber);
//   delete array[index];
// }
// console.log(sortArray);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
