// Write a JavaScript program to find the maximum number in an array.

// console.log(Math.max(1, 3, 2));
// // Expected output: 3

// console.log(Math.max(-1, -3, -2));
// Expected output: -1

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// Expected output: 3

// Logic
// const array1 = [1, 45, 36, 80, 2];
// const findMaxNumber = array1.reduce((maxNumber, currentValue) => {
//   return maxNumber > currentValue ? maxNumber : currentValue;
// }, 0);
// console.log(findMaxNumber);

//////////////////////////////////////////////////////
// Write a JavaScript program to reverse a given string.
// without logic
// const reverseString = (str) =>{
//     return str.split("").reverse().join("");
// }

// with logic
// const reverseString = (str) => {
//   const length = str.length;
//   let newStr = "";
//   for (let i = length; i > 0; i--) {
//     newStr = newStr + str.slice(i-1,i)
//   }
//   return newStr;
// };

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed = reversed + str[i];
//     }
//     return reversed;
//   }
// console.log(reverseString("shoaib"));

//////////////////////////////////////////////////////
// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// const isPalindrome = (str) => {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome('bob'));
// console.log(isPalindrome('shoaib'));

//////////////////////////////////////////////////////

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// let array = [1, 2, 4, 5, 6, 7];
// const filterEvenNumbers = (arr) => {
//   return arr.filter((num) => num % 2 === 0);
// };
// console.log(filterEvenNumbers(array));

// Write a JavaScript function that takes an array of numbers and returns a new array with only the odd numbers.

// let array = [1, 2, 4, 5, 6, 7];
// const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 == 0);
// console.log(filterEvenNumbers(array));

//////////////////////////////////////////////////////
// Write a JavaScript program to calculate the factorial of a given number.
// Sample answer: A factorial number is the product of all positive integers, which are equal to or less than the given number.

// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     // return number * factorial(number - 1);
//     let fact =1;
//     for(let i=1; i<=number;i++)
//     {
//         // fact*= i
//         fact = fact * i;
//     }

//     return fact;
//     // return number * factorial(number - 1);
//   }
// }

// console.log(factorial(7));

//////////////////////////////////////////////////////
// Write a JavaScript function to check if a given number is prime

// A prime number is a number that can only be divided by itself and 1 without remainders.
// What are the prime numbers from 1 to 100? The prime numbers from 1 to 100 are: 2, 3, 5, 7, 11, 13, 17,
// 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

// const isPrimeNumber = (num) => {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };
// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(2));
// console.log(isPrimeNumber(3));
// console.log(isPrimeNumber(4));
// console.log(isPrimeNumber(5));

// const isPrimeNumber = (num) => {
//   let isPrimeNum = true;
//   if (num <= 1) {
//         isPrimeNum = false;
//   } else {
//         for (let i = 2; i < num; i++) {
//           if (num % i === 0) {
//             isPrimeNum = false;
//             break
//           }
//         }
//   }

//   return isPrimeNum;
// };

// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(2));
// console.log(isPrimeNumber(3));
// console.log(isPrimeNumber(4));
// console.log(isPrimeNumber(5));

//////////////////////////////////////////////////////
// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

// let str = "hello my name is shoaib";

// const capitalizeFun = (str) => {
//   let arr = str.split(" ").map((element) => {
//     let arr1 = element.split("");
//     arr1[0] = arr1[0].toUpperCase();
//      return arr1.join("");
//   });
//   return arr.join(" ");
// };

// const capitalizeFun = (str) => {
//     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// }

// const capitalizeFun = (str) => {
//     let arr = str.split(" ").map((word)=>{
//        return word.charAt(0).toUpperCase()+ word.slice(1);
//         // let arr1  = word.split("");
//         // arr1[0] = arr1[0].toUpperCase();
//         // return arr1.join("");
//     });
//     return arr.join(" ");
// }
// console.log(capitalizeFun(str));

//////////////////////////////////////////////////////
// Implement a function that takes two sorted arrays and merges them
// into a single sorted array without using any built-in sorting functions.

// function mergeSortedArrays(arr1, arr2) {
// //   let newArr = [...arr1, ...arr2];
// //   let newArrLength = newArr.length;

// //   let newArr2 = [];
// //   for (let i = 0; i < newArrLength; i++) {
// //     let maxNum = Math.min(...newArr);
// //     newArr2.push(maxNum);
// //     let index = newArr.indexOf(maxNum);
// //     newArr.splice(index, 1);
// //   }
// //   return newArr2;

// // return [...arr1, ...arr2].sort((a, b) => b - a);
// return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([5, 2, 3, 4], [9, 8, 6, 7]));

//////////////////////////////////////////////////////

// Implement a function to find the sum of all the numbers in an array.

// let arr = [1, 2, 3];
// function findSum(arr) {
//   return arr.reduce((sum, current) => (sum = sum + current),0);
// }
// console.log(findSum(arr));

//////////////////////////////////////////////////////

// Implement a function to remove duplicates from an array.
// let arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];
// // logic
// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

//////////////////////////////////////////////////////

// Implement a function that finds the second smallest element in an array of integers.

// let arr = [5, 2, 3, 4, 9, 8, 6, 7];
// let arr1 = [5, 2];
// let arr2 = [5];
// let arr3 = [];

// function secondSmallest(arr) {
//   let sortedArr = arr1.sort((a, b) => b - a);
//   if (arr.length >= 2) {
//     return sortedArr[1];
//   } else {
//     return null;
//   }
// }

// function secondSmallest(arr) {
//     let sortedArr = arr.sort((a, b) => a - b);

//     if(arr.length >= 2){
//        return sortedArr[1];
//     } else if(arr.length === 1){
//         return sortedArr[0];
//     }else{
//         return null
//     }
// }
// console.log(secondSmallest(arr));
// console.log(secondSmallest(arr1));
// console.log(secondSmallest(arr2));
// console.log(secondSmallest(arr3));

//////////////////////////////////////////////////////

// What will be the result when executing the given code?
// const arr = ['A', 'N', 'U'];
// arr[10] = 10;
// console.log(arr);
// console.log(arr.length);
//output
// [ 'A', 'N', 'U', <7 empty items>, 10 ]
// 11

//////////////////////////////////////////////////////
// What is the output of the following code?
// let array = [1, 2, 3, 4, 5];
// array.length = 0;
// console.log(array)

// output
// []

//////////////////////////////////////////////////////

// How do you create an empty array in JavaScript?

// let arr = [];
// let arr1 = new Array();
// console.log(arr);
// console.log(arr1);

//////////////////////////////////////////////////////
// How do you access the first and last elements of an array?

// let arr = [1, 2, 3, 4];
// let firstElement = arr[0]; // 1
// let lastElement = arr[arr.length - 1]; // 4

//////////////////////////////////////////////////////

// How do you remove the last element from an array?
// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr); // [1, 2]

// How do you add the last element from an array?
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// How do you remove the first element from an array?

// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr); // [1, 2]

// How do you add the first element from an array?

// let arr = [1, 2, 3];
// arr.unshift(4);
// console.log(arr); // [4 ,1, 2, 3]

//////////////////////////////////////////////////////



