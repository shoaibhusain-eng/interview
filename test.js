const arr = [1, 4, 3, 4, 5, 3, 7, 8, 9, 10];

// const newArra = arr.filter((element)=> element%2);
// console.log(newArra);

// list of all duplicate value
// const newArra = arr.filter((element) => {
//     let index1 = arr.indexOf(element);
//     let index2 = arr.lastIndexOf(element);
//     if (index1 !== index2)
//         return element;
// });

// list of all duplicate value 
// const newArra = arr.filter((element, index) => {
//   let index1 = arr.indexOf(element);
//   if (index1 !== index)
//       return element;
// });

// remove element one duplicate value
// const newArra = arr.filter((element, index) => {
//   let index1 = arr.indexOf(element);
//   if (index1 == index)
//       return element;
// });
// console.log(newArra);

///////////////////////////////////////////////////

// let x = 'Hello' || false; // x is equal to 'Hello' (first truthy value)

// let y = false || 'Yes' || 1; // y is equal to 'Yes' (first truthy value)

// let z = false || undefined || 0; // since all are false, z is equal to 0 (the last value)

// console.log(`x ==> ${x},  y ==> ${y}, z ==>${z}`);

///////////////////////////////////////////////////

// const modified = (mobileNumber) => {
//   // Check if the mobile number starts with "+91"
//   let index = mobileNumber.indexOf("+91");
//   let index1 = mobileNumber.indexOf("+");

//   let newNumber;

//   if (index >= 0) {
//     // Remove the "+91" from the beginning
//     newNumber = mobileNumber.slice(3);
//   } else if (index1 >= 0) {
//     // Remove the "+" from the beginning
//     newNumber = mobileNumber.slice(1);
//   } else {
//     newNumber = mobileNumber;
//   }

//   // console.log("##############################");
//   // console.log(newNumber);
//   // console.log(newNumber.length);
//   // console.log("##############################");

//   if (newNumber.length === 10) return `+91${newNumber}`;
//   if (newNumber.length === 11) return `+${newNumber}`;
//   // else if (mobileNumber.length === 10) return `+91${mobileNumber}`;
// };

// console.log(modified("+919703210041"));
// console.log(modified("9703210041"));
// console.log(modified("+17828256512"));
// console.log(modified("17828256512"));

// const originalUrl = '/home/shoaibhusain/shoaib/lms-backend/src/utils';
// // const urlObject = new URL(originalUrl, 'http://localhost'); // Providing a base URL is necessary

// // Split the pathname into segments
// const pathSegments = originalUrl.pathname.split('/');

// // Remove the last two segments
// pathSegments.splice(-2);

// // Join the segments back into a path
// const newPath = pathSegments.join('/');

// console.log(newPath);

// const originalUrl = '/path/to/some/resource';
// const urlObject = new URL(originalUrl, 'http://localhost'); // Providing a base URL is necessary

// // Split the pathname into segments
// const pathSegments = urlObject.pathname.split('/');

// // Remove the last two segments
// pathSegments.splice(-2);

// // Join the segments back into a path
// const newPath = pathSegments.join('/');

// console.log(newPath);

// let originalUrl = '/home/shoaibhusain/shoaib/lms-backend/src/utils';
// originalUrl.lastIndexOf('/');

// console.log(originalUrl.lastIndexOf('/src'));
// console.log(originalUrl.slice(0, 37));

// let nums = [1, 2, 3, 4, 5];
// let b = nums.reduce((a, b) => {
//   return a + b;
// });

// console.log(b);

// let average = (nums) => {
//   return nums.reduce((a, b) => (a + b)) / nums.length;
// }
// console.log(average(nums));

// let a = 0;
// let b = "0";

// if (a == b) console.log(`case 1`);

// if (a === b) console.log(`case 2`);

// what is hositing
// Hoisting allows variables and function declarations to be used before they are officially declared in the code.

// getName();
// console.log(x);

// function getName(){
// console.log("shoaib");
// }

// var x =7;

// result
// shoaib
// undefined

///////////////////////////////////////////

// undefined or null
// console.log(a);
// var a=7;
// console.log(a);
// undefined
// 7

// console.log(x);
// ReferenceError: x is not defined

/////////////////////////////////

// var let const

// var x
// you can able to access x variables before declarations or initialization

// let y
// you are not able to access y variables before declarations or initialization

// const z
// in const case you can not assign valuse later
// you can't change the value ofr const variable

/////////////////////////////////////////////////////////

// what is closure
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

//////////////////////////////////////////////////////////

// setTimeout

// function a(){
//     setTimeout(()=>{
//         console.log("shoaib");
//     },2000);
//     setTimeout(()=>{
//         console.log("sohel");
//     },1000);
//     console.log("Hello");
// }
// a();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// output => 6 6 6 6 6 6  

// function y() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// y();

// output => 1 2 3 4 5

////////////////////////////////////////////////

// what is call backfunction javascript
// - A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
// The consumer of a callback-based API writes a function that is passed into the API.
// setTimeout(()=>{
//     console.log("Timmer");
// },1000);

///////////////////////////////////////////////////////////////

/// what is higher order function

// a function who take an other function as argument and retuen a function that type of function we called
// hihger order function
//
// map filter and reduce are the example of hiherorder function

////////////////////////////////////////////////////////////

// what is Promise
// In JavaScript, a Promise is an object that will produce a single value
//  some time in the future. If the promise is successful, it will prod
// uce a resolved value, but if something goes wrong then it will
//  produce a reason why the promise failed

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

////////////////////////////////////
// const array = [1, 2, 3, 4, 5, 6];
// let number = 8;

// let newArray = array;

// function rotate(newArray, rotation) {
//   rotation = rotation % newArray.length;
//   for (let i = 1; i <= rotation; i++) {
//     let firstElement = newArray[0];
//     newArray.shift();
//     newArray.push(firstElement);
//   }
//   return newArray;
// }
// console.log(rotate(array, number));
///////////////////////////////////

// function counter(){
// let count  = 0;
// return () => count++;
// }

// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());

// output
// 0
// 1
// 2

///////////////////////////

// const arr = [1, 4, 3, 4, 5, 3, 7, 8, 9, 10];
// const sumOfEvenNumber = arr
//   .filter((number) => number % 2 === 0)
//   .reduce((sum, cuurentNumber) => (sum = sum + cuurentNumber), 0);
// console.log(sumOfEvenNumber);


// const array = [2389, 234, 43, 4, 5, 35];
// const target = 56;
// // Calculate the absolute difference between each number and the target
// const differences = array.map(num => Math.abs(num - target));
// console.log(differences);
// // Find the index of the number with the smallest difference
// const closestIndex = differences.indexOf(Math.min(...differences));
// console.log(closestIndex);
// // Get the closest number
// const closestNumber = array[closestIndex];

// console.log("Closest number to 56:", closestNumber);
