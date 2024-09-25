// var x = 0;
// var y = 23;

// if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)

// if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

// var x = 220;
// var y = "Hello";
// var z = undefined;

// // x | | y    // Returns 220 since the first value is truthy

// // x | | z   // Returns 220 since the first value is truthy

// // x && y    // Returns "Hello" since both the values are truthy

// // y && z   // Returns undefined since the second value is falsy

// if( x && y ){
//   console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
// }

// if( x || z ){
//   console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
// }

// function doSomething() {
//     console.log(this);
//   }

//   doSomething();

//////////////////////////////////////////////////////////////////////////////////

// What is the purpose of the following JavaScript code?

// var scope = "global scope";
// function check()
// {
//     var scope = "local scope";
//     function f()
//     {
//          return scope;
//     }
//     return f;
// }
// console.log(check()());

////////////////////////////////////////////////////////////////////////////////////

// Code 1:

// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 3000);

//   var x = 2;
//   let y = 12;
// }
// func1();

// Code 2:

// function func2() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
// }
// func2();

// Code 3:

// (function () {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// })();

/////////////////////////////////////////////////////////////////////////////

// Code 1:

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// Code 2:

// function runFunc(){
//   console.log("1" + 1); //11
//   console.log("A" - 1); //NaN
//   console.log(1 - '1'); //0
//   console.log(2 + "-2" + "2"); //2-22
//   console.log("Hello" - "World" + 78); // NaN
//   console.log("Hello"+ "78");  //Hello78
// }
// runFunc();




// Code 3:

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// 11
// Nan
// 2-22
// NaN
// Hello78

//////////////////////////////////////////////////////////////////////////////

// function random() {
//   var x; // x is hoisted
//   x++; // x is not a number since it is not initialized yet
//   console.log(x); // Outputs NaN
//   x = 21; // Initialization of x
// }

// random();

////////////////////////////////////////////////////////////////////////////////

// const array = [1, 2, 3, 4, 5];
// let number = 2;
// let newArray = array;

// var a = 0;
// function rotate(newArray, rotation) {
//     rotation = rotation % newArray.length;
//     for(let i = 0; i<=rotation;i++){
//          a++
//         let firstElement = newArray[0];
//         newArray.shift();
//         newArray.push(firstElement);
//     }
// }
// rotate(array,number);
// console.log(newArray);
// console.log(a);

////////////////////////////////////////////////////////////////

// function rotate(newArray, rotation){
//     rotation = rotation % newArray.length;
//     let spliceArr = newArray.splice(newArray.length - rotation);
//     return [...spliceArr, ...newArray];
// }
// console.log(rotate(array,number));

/////////////////////////////////////////////////////////////////

// Write the code to find the vowels ?

// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for(let char of str.toLowerCase()) {
//       if(vowels.includes(char)) {
//         count++
//       }
//     }
//     return count
//   }
//  console.log(findVowels("shoaib"));

////////////////////////////////////////////////////////////////

//  What is the output of the following code?

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// answer

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined


////////////////////////////////////////////////////////////

//  RemoveDuplicates Element

let arrayList = [2, 1, 2, 5, 2, 3, 1, 5, 7];
// const arrayList = [1, 4, 3, 4, 5, 3, 7, 8, 9, 10]

// 1)
// let uniqArr = arrayList.filter((element, index)=> arrayList.indexOf(element)=== index);

// 2)
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// let uniqArr =  removeDuplicates(arrayList);

// 3)
// let  uniqArr = [];
// arrayList.forEach((element, index)=> uniqArr.indexOf(element) == -1 ? uniqArr.push(element):'')
// console.log(uniqArr);

// list of all duplicate value 
// const duplicateArr = arrayList.filter((element, index) => {
//     if (arrayList.indexOf(element) !== arrayList.lastIndexOf(element)) {
//         if (arrayList.indexOf(element) === index)
//             return element;
//     }
// });

// console.log(duplicateArr);

///////////////////////////////////////////////////////////

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.push(10);
// console.log("push",arr);

// arr.pop();
// console.log("pop", arr);

// arr.unshift(0);
// console.log("unshift",arr);

// arr.shift();
// console.log("shift", arr);

////////////////////////////////////////////////////////////////

// function scope example with let and var

// function x(){
//     let a = 10;
// }
// console.log(a); // ReferenceError: a is not defined
// x()
// console.log(a); // ReferenceError: a is not defined

// function y(){
//     var b = 10;
// }

// console.log(b); // ReferenceError: a is not defined
// y()
// console.log(b); // ReferenceError: a is not defined

///////////////////////////////////////////////////////////////////////
// block scope

// {
//     var a=10;
// }
// console.log(10);  // 10


// {
//     let b=10;
// }
// console.log(10); // ReferenceError: b is not defined

//////////////////////////////////////////////////////////

// let arr = [4,3,1,5,7,9,8];

// console.log(arr.sort((a,b)=> a-b));
// console.log(arr.sort());
// console.log(arr.sort().reverse());

////////////////////////////////////////////////////////////

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months.toReversed();
// console.log(reversed);
// console.log(reversed.toSorted());


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);


// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]


//////////////////////////////////////////////////////////////

// console.log(true==true==true);       //true
// console.log(1==1==1);                //true
// console.log(0==0==0);                //false
// console.log(false==false==false);   //false
// console.log(2==2==2);                //false
// let a= true, b= true, c=true;
// console.log(a==b==b);               //true
// console.log(3&&8&&6);                //6        
// console.log(3&&8&&4);                //4       
// console.log(3&&0&&6);                //0   
// console.log(1>2>3);                     // false   1>2 = 0, 0 > 3  = false
// console.log(1<2<3);                     // true     1 < 2, 1, 1<3 = true
// console.log(3<2<1);                     // true      3< 2, 0,  0<1 = true

// let x = 'Hello' || false; // x is equal to 'Hello' (first truthy value)

// let y = false || 'Yes' || 1; // y is equal to 'Yes' (first truthy value)

// let z = false || undefined || 0; // since all are false, z is equal to 0 (the last value)
// let a = false || undefined || false; // since all are false, a is equal to false (the last value)

// console.log(`x ==> ${x},  y ==> ${y}, z ==>${z}, a ==>${a}`);

//////////////////////////////////////////////////////////////

// let a = [1,2,3];
// let b = [...a];
// b[3]=4;
// console.log(a); [ 1, 2, 3 ]

////////////////////////////////////////////////////////////////

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.push(10);
// console.log("push",arr);

// arr.pop();
// console.log("pop", arr);

// arr.unshift(0);
// console.log("unshift",arr);


// arr.shift();
// console.log("shift", arr);


//////////////////////////////////////////////////
// console.log(0||1||2); // 1
// console.log(2||1||3); // 2
// console.log(0||0||3); // 3
// console.log(10==10==10); // false
//////////////////////////////////////////////////


// fetch('https://gorest.co.in/public/v2/users').then(async (result) => {
//     let a = await result.json();
//     console.log(a);
// }).catch((error) => {
//     console.log("error", error);
// }).finally(() => {
//     console.log("Completed")
// })


//////////////////////////////////////////////////////////////////////////


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
//Output:- Hi Tony from Pune, Maharashtra


//////////////////////////////////////////////////////////////////////////////////////////
// let arr = [1,2,3];
// let arr1 = arr;

// arr1.push(4);
// arr1.shift();

// console.log(`Arr => ${arr}`);
// console.log(`Arr1 => ${arr1}`);

//Output:-
// Arr => 2,3,4
// Arr1 => 2,3,4
///////////////////////////////////////////////////////////////////////////////////////////



// function flattenArray(arr) {
//     let result = [];

//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             result = result.concat(flattenArray(element));
//         } else {
//             result.push(element);
//         }
//     });

//     return result;
// }

// let arr = [1, 44, [2, [3, 9], 67], 9];
// let flattenedArray = flattenArray(arr);
// console.log(flattenedArray); // Output: [1, 44, 2, 3, 9, 67, 9]


// defulte function
// let arr = [1, 44, [2, [3, 9], 67], 9];
// let flattenedArray = arr.flat(Infinity);
// console.log(flattenedArray); // Output: [1, 44, 2, 3, 9, 67, 9]


///////////////////////////////////////////////////////////////////////////////////


// Recursive Countdown

// function countdown(n) {
//     if (n <= 0) {
//         console.log("Blastoff!");
//     }else{
//         console.log(n);
//         countdown(n-1);
//     }
// }

// countdown(5);
///////////////////////////////////////////////////////////////////////////////////

// let myArray = [1, 2, 3, 4, 5];
// let index = 2;
// let removedElement = myArray.splice(index, 1);
// console.log(myArray);  // Output: [1, 2, 4, 5]
// console.log(removedElement);  // Output: [3]

///////////////////////////////////////////////////////////////////////////////////

// let users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];

// let targetId = 2;

// let index = users.findIndex(user => user.id === targetId);

// console.log(index);  // Output: 1 (since Bob has id 2)
// console.log(users[index]);  // Output: { id: 2, name: 'Bob' } (since Bob has index 1)

/////////////////////////////////////////////////////////////////////////////////
// 1) 

// let numbers = [1, 2, 3, 4, 5, 2, 3, 5, 2, 3, 5, 7, 8];
// let new_list = [];

// numbers.forEach((num) => {
//     let index = new_list.findIndex(element => element.id == num);
//     if (index >= 0) {
//         let count = new_list[index]['count'] + 1;
//         new_list[index] = { id: num, count: count }
//     } else {
//         new_list.push({ id: num, count: 1 })
//     }
// })

// console.log(new_list);

/////////////////////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5, 2, 3, 5, 2, 3, 5, 7, 8];
// const findKeyCount = (arr) => {
//     let result = {};
//     if(arr?.length > 0) {
//         arr.forEach((ele) => {
//             if(result[ele]) {
//                 result[ele] = result[ele] + 1;
//             } else {
//                 result[ele] = 1;   
//             }
//         })
//     }
//     return result;
// }

// const res = findKeyCount(numbers);
// console.log(res);

//////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5,3,4,30];

// Array.prototype.removeAt = function (index) {
//     if(index >=0 &&  this.length > 0){
//         this.splice(index,1);
//     }else{
//         console.error('Index out of bounds');
//     }
//     return this;
// }
// console.log(numbers.removeAt(2));


////////////////////////////////////////////////

// for (var i = 0; i < 5; i++) {
//     setTimeout(()=>{
//         console.log(i * 1000);
//     },1000);
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(()=>{
//         console.log(i * 1000);
//     },1000);
// }

////////////////////////////////////////////////

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof String); // functin
// console.log(typeof Number); // functin

////////////////////////////////////////////////////

// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three, print "Fizz" instead of the 
// number and for the multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz".
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0  && i !== 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0  && i !== 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


////////////////////////////////////////////////////////////////

// Write a function to check if a string is a permutation of a palindrome.

// function isPalindrome(num){
//    let numStr = num.toString().toLowerCase();
//    let newNumStr = numStr.toLowerCase().split('').reverse().join('');
//     if(numStr === newNumStr) {
//         return true;
//     }
//    return false;
// }

// console.log(isPalindrome('shHs')); true
// console.log(isPalindrome('1111'));true
// console.log(isPalindrome('11511'));true
// console.log(isPalindrome('11561'));false

////////////////////////////////////////////////////////////


// Write a function to determine if a string has all unique characters.

// function hasAllUnique(str){
//     let strArr = str.split('');
//     let allUniqueStr = new Set(strArr);
//     if(str === Array.from(allUniqueStr).join('')){
//         return true;
//     }
//     return false;
// }

// console.log(hasAllUnique('hello'));
// console.log(hasAllUnique('abcd'));

/////////////////////////////////////////////////////////////////


// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         console.log(i)
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   console.log(isPrime(7)); // true
//   console.log(isPrime(20)); // false

////////////////////////////////////////////////////////////////s


// var name = 'shoaib';

// let object = {
//     name: 'John',
//     hello: () => {
//         return this.name
//     },
//     test: function () {
//         return this.name
//     }
// }

// console.log(object.hello());    // undefined
// console.log(object.test());     // John

////////////////////////////////////////////////////

// let object = {
//     name: 'John',
//     hello: () => {
//         return this.name
//     },
//     test: function () {
//         return this.name
//     }
// }

// console.log(object.hello());    // undefined
// console.log(object.test());     // John

////////////////////////////////////////////////////////

// var name = "shoaib";
// let name1 = "Jon";

// console.log(window.name);
// console.log(window.name1);

// var name = "shoaib";
// let name1 = "test";


// in browser
// VM234:4 shoaib
// VM234:5 undefined

/////////////////////////////////////////////////////////

// name = 'test'
// function  test(name)  {
//     this.name = name
//     name = name
//     return ()=> this.name;
// }

// console.log(test('shoaib')()); // shoaib

////////////////////////////////////////////////

// name = 'shoaib'
// function  test()  {
//     return ()=> this.name;
// }

// console.log(test()()); // shoaib

///////////////////////////////////////////////

// let obj = {
//     name: "shoaib",
//     greet: () => {
//         function child() {
//             console.log(this.name);
//         }
//         child();
//     }
// }
// obj.greet();  // undefined

// this.name = "husain";
// let obj = {
//     name: "shoaib",
//     greet: function () {
//         function child() {
//             console.log(this.name);
//         }
//         child();
//     }
// }
// obj.greet();  // shoaib


///////////////////////////////////////////////

// const a = (name) => {
//     name = name;
//     console.log(this.name);
// }

// a('shoaib') //undefined


// const a = function(name){
//     name = name;
//     console.log(this.name);
// }

// a('shoaib') // undefined
////////////////////////////////////////////////

// console.log((true+1)[3]); undefined
// console.log((true+1)); 2

///////////////////////////////////////////////


// Find largest no in array without loop.
// const arr = [53, 3, 34, 3, 1, 4, 6, 89];
// console.log(arr.reduce((pre, currentNum) => pre > currentNum ? pre : currentNum,0))


// Sum of fees in array of objects of users.
// const arr = [ 1,2,4,6,2];
// console.log(arr.reduce((acc, cur) => acc+cur,0));

//////////////////////////////////////////////////////////////////////////////////////

// const arr = [{ name: "a", fee: 30 }, { name: "b", fee: 3 }, { name: "c", fee: 5 }]
// console.log(arr.reduce((acc, cur) =>  
// {
//   return acc += cur.fee;
// } , 0
// ));
// console.log(arr.reduce((acc, cur) => acc = acc + cur.fee, 0)); 


///////////////////////////////////////////////////////////////////////////////////////////
// Convert array to object and object to array.

// const obj = { '0': 'a', '1': 'b', '2': 'c' };
// let arr =  Object.keys(obj).map((element)=> { return {element: obj[element]}});
// console.log(arr);

// console.log(arr.reduce((acc,curr    ,index)=>{
//     acc[index] = curr;
//     return acc;
// },{}))

// console.log(Array.isArray([]));

// let greet = {
//     name: 'shoaib',
//     age: 23,
//     greet: function () {
//         console.log(this.name);
//     }
// }
// greet.greet.call({name:'call'});
// greet.greet.apply({name:'apply'});
// let bindfunc = greet.greet.bind({name:'bind'});
// bindfunc()


// let obj = {
//     name: 'shoaib',

// }

// obj.sayHello = function (city,state){
//        console.log(`Hi ${this.name} from ${city}, ${state}`); // Here "this" points to nameObj 
// } 

// obj.sayHello.call(obj, "indore","MP");
// obj.sayHello.apply(obj, ["indore","MP"]);


// String.prototype.sayHii = function(){
//     return `Hello ${this}`;
// }

// console.log('shoaib'.sayHii());

//////////////////////////////////////////////////////////////////////////////////

// let arr = [6, 1, 0, 5, 0, 3, 0, 2];
// const arr1 = [];
// const arr2 = [];

// arr.forEach((element, index) => {
//     if(element === 0)
//         arr1.push(element)
//     else
//         arr2.push(element)
// });

// console.log([...arr1, ...arr2]);


// let arr = [6, 1, 0, 5, 0, 3, 0, 2];
// arr.forEach((element, index) => {
//     if (element === 0){
//         arr.splice(index, 1)
//         arr.unshift(element);
//     }
// })

// console.log(arr);


// OutPut should be [0, 0, 0, 6, 1, 5, 3, 2]


////////////////////////////////////////////////////////////////////

// for(let i =2;i<=100;i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log('fizz buzz ===>', i);
//     }else if(i%5 === 0) {
//         console.log('buzz ===>', i);
//     }else if (i%3 === 0){
//         console.log('fizz ===>', i);
//     }
// }


// Print id i%3 === 0 && i%5 === 0 === fizz buzz
// Print id i%5 === 0 === buzz
// Print id i%3 === 0 === fizz

////////////////////////////////////////////////


// let arr = [20, 10, 10, 10, -50, -10];
// let arr = [-10,-20,-30]
// let arr = [10,20,30];
// let arr =  [10,20,-30,12,15];

// let minHealth = 1;
// let health = 1;

// for (let index = 0; index < arr.length; index++) {
//     health = health + arr[index];
//     if (health < 1) {
//         health = Math.abs(arr[index]) + 1;
//         minHealth = minHealth + Math.abs(arr[index]) 
//         health = health + arr[index];
//     }
//     console.log(`Level ${index}, Health ${health}`);
// }


// console.log(`Minmum Health ======> ${minHealth}`);
// console.log(`Last Health ======> ${health}`);


/////////////////////////////////////////////////////////////

// let promise = new Promise((resolve, reject) => {

// //some code 

// resolve(5);

// //some more code

// resolve(10);

// //some more code

// reject(new Error());

// });

// promise.then((data)=>{
//   console.log(data)
// }).catch((error)=>{
//     console.log(error.message);
// }); // 5

// promise.then((data)=>{
//     console.log(data);
//   }).then((data)=>{
//       console.log(data);
//   }).catch((err)=>{
//     console.log(err.message);
//   });  // 5 and undifiend

// promise.then((data)=>{
//     return data;
//   }).then((data)=>{
//       console.log(data);
//   }).catch((err)=>{
//     console.log(err.message);
//   });  // 5


////////////////////////////////////////////////////////

// let promise = new Promise((resolve, reject) => {
//     resolve(5);
// // logic
// });

// promise.then((data) => {console.log(data)});
// promise.then((data) => {console.log(data)});


// let promise = new Promise((resolve, reject) => {
//     resolve(5);
// });

// async function b(){
//     let a = await promise.then((data) => {return data}).then((data) => {return data});
//     console.log(a);
// }
// b();

//////////////////////////////////////////////////////////////

// let arr = [2, 4, 6, 5, 4, 2, 1]

// dup = [2,4]
// unique = [6,5,1]
// function dupAndUnique(arr) {
//   let dup = arr.filter((element, index) => {
//     if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
//       if (arr.indexOf(element) === index) {
//         return element;
//       }
//     }
//   }
//   );
//   let unique = arr.filter((element, index) => arr.indexOf(element) === arr.lastIndexOf(element));
//   return { dup: dup, unique: unique }
// }
// console.log(dupAndUnique(arr));


// let arr = [2, 4, 6, 5, 4, 2, 1];
// Array.prototype.removeAt = function(index){
//    let a = this.slice(index,index+1);
//    return this.filter((ele)=> ele !== a[0]);
// }
// console.log(arr.removeAt(10));


//////////////////////////////////////////////////////////////////////


// console.log("Type: "+ typeof typeof 1); sting
// console.log([] == []); false
// console.log([] = []); []

// const arr = [1, 2, 3];
// arr[10] = 4;                 
// console.log(arr.length);  11
// console.log(arr);  
// console.log(null == undefined); true

// const obj = { a: 1 };
// const obj2 = obj; 
// obj2.a = 2;
// console.log(obj.a);  2
// console.log(0.1 + 0.2 === 0.3); //false


//////////////////////////////////////////////////////////////////////


// let arr = [19, 17, 10, 50, 3, 1, 2];
// let newArr = arr.filter((num) => {
//     let isPrimeNumber =  true;
//     if (num != 0) {
//         for (i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 isPrimeNumber = false
//                 break;
//             }
//         }
//     }

//     if(isPrimeNumber){
//         return num;
//     }else{
//         return false;
//     }
// })

// console.log(newArr);


///////////////////////////////////////////////////////////////


// let add = '123456789123';
// let middilNumber =  add.split('').filter((num,index)=> (index > 3 && index < 8) ? num :'' ).join('');
// console.log(add.slice(3,7));
// console.log(middilNumber);

//////////////////////////////////////////////////////////////

// To find the maximum profit from buying and selling stocks in the given array arr, 
// where you can only make one transaction (buy once and sell once), 
// you can follow these steps:

// let arr = [19, 17, 10, 50, 3, 1, 2];

// function maxProfit(arr) {

//     if (arr.length < 2) {
//         return 0; // cannot make any transaction
//     }

//     let minPrice = Infinity;
//     let maxProfit = 0;

//     arr.forEach((currentPrice)=>{
//         if(currentPrice < minPrice){
//             minPrice = currentPrice;
//         }else if(currentPrice - minPrice > maxProfit){
//             maxProfit = currentPrice - minPrice;
//         }
//     })

//     return maxProfit;;
// }

// console.log(maxProfit(arr)); // Output: 40 (buy at 10 and sell at 50)

//////////////////////////////////////////////////////////////

// To find the maximum profit from buying and selling stocks in the given array arr, 
// where you can only make multiple transaction, 
// you can follow these steps:


// let arr = [19, 17, 10, 50, 3, 1, 2];

// let maxProfit = 0;
// let sellingPrice = 0;
// let buyingPrice = arr[0];


// arr.forEach((num, index)=>{
//     if(buyingPrice === num){
//         console.log("NA");
//     }else if(buyingPrice > num){
//         buyingPrice = num;
//     } else{
//         profit = num - buyingPrice;
//         maxProfit = maxProfit+profit;
//         buyingPrice = arr[index +1];
//     }
// })

// console.log(maxProfit);

//////////////////////////////////////////////////////////////////////

// 11
//   5
//    -12
// --------------
// 4

//      4
//   5
// 10
// -------------
// 19

// ans =  19-4 =15

// let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// let breakPoint = 0;
// let total = 0;

// let breakPointb =  arr.length;
// let totalB =  0;

// for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i][breakPoint];
//     ++breakPoint

//     --breakPointb;
//     totalB = totalB + arr[i][breakPointb]
// }

// // console.log(total);
// // console.log(totalB);

// console.log(Math.abs(total - totalB));


///////////////////////////////////////////////////////////////////
// make triangle pattern like this is n = 6;
//         #
//        ##
//       ###
//      ####
//     #####
//    ###### 

// function staircase(n) {
//     for (let i = 1; i <= n; i++) {
//         let spaceC = ' '.repeat(n - i);
//         let hasC = '#'.repeat(i);
//         console.log(spaceC + hasC);
//     }
// }

// staircase(6);

///////////////////////////////////////////////////////////////////

// const payload = [
//     { id: 1, name: 'Tom' },
//     { id: 1, name: 'Tom1' },
//     { id: 1, name: 'Tom1' },
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Nick' },
//     { id: 2, name: 'Nick' },
//     { id: 2, name: 'Bob' },
// ];

// 1) 
// let uniqArr = [];
// payload.forEach((element) => {
//     if (!uniqArr.find(item => item.id === element.id && item.name === element.name)) 
//         uniqArr.push(element);
// })
// console.log(uniqArr);

// 2) 
// let uniqArr = payload.filter((element, index, array) => {
//     const currentIndex = array.findIndex(item => item.id === element.id && item.name === element.name);
//     return currentIndex === index;
// });
// console.log(uniqArr);

// output
// [
//     { id: 1, name: 'Tom' },
//     { id: 1, name: 'Tom1' },
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Nick' },
//     { id: 2, name: 'Bob' }
// ]


//////////////////////////////////////////////////////////////////

// console.log("1===>", this); // {}
// var car = function () {
//     console.log("2===>", this); // car {}
//     setTimeout(function () {
//         console.log("3===>", this); // Timeout {}
//     }, 0);
//     setTimeout(() => {
//         console.log("4===>", this); // car{}
//     }, 0);
// }
// var c = new car()
// console.log("5===>", this); // {}

//////////////////////////////////////////////////////////////////

// let reveseNumber = (num) => {
//     let reversed = 0;
//     while (num) {
//         let lastDigit = num % 10;
//         reversed = reversed * 10 + lastDigit;
//         // num = Math.floor(num / 10); all are same work
//         // num = parseInt(num / 10);
//         num = num / 10 >> 0; // it convert floot to int
//     }
//     return reversed;
// }
// console.log(reveseNumber(123));

//////////////////////////////////////////////////////////////////

// function test(fullname){
//     let firstName = '';
//     let lastName = '';
//     let slpit = true;

//     for(let i = 0; i< fullname.length;i++){
//         if(fullname[i] === ' ') slpit = false;

//         if(slpit){
//             firstName = firstName + fullname[i];
//         }
//         else{
//             lastName = lastName + fullname[i];
//         }
//     }
//     return lastName + ' '+firstName;
// }
// // husain shoaib
// console.log(test('shoaib husain'));

//////////////////////////////////////////////////////////////////

// let str = 'aabbbcccdde';
// let obj = {};
// for(let i =0;i< str.length;i++){
//     let   = str[i];
//     if(obj[key]){
//         obj[key] = obj[key] + 1;
//     }else{
//         obj[key] = 1;
//     }
// }

// let newStr = '';
// for(key in obj){
//     newStr = newStr + obj[key] + key;
// }

// console.log(newStr);


// const str = 'aabbbcccdde';

// Count frequencies using reduce
// const obj = [...str].reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
// }, {})


//////////////////////////////////////////////////////////////////


// // let length = 0;
// // let reveseStr = '';
// // let nameStr = 'shoaib';

// function test(str) {
//     if (length < nameStr.length) {
//         let index = str.length - length;
//         reveseStr = reveseStr + str[index - 1];
//         length++;

//         test(str);
//     }
// }

// test(nameStr);
// console.log(reveseStr);


// reverse string without using any method and without loop

// let length = 0;
// let nameStr = 'shoaib';
// let reveseStr = '';

// function reverse(str, length, reveseStr) {
//     if (length < str.length) {
//         let index = str.length - length;
//         reveseStr = reveseStr + str[index - 1];
//         length++;
//         return reverse(str, length, reveseStr);
//     }
//     return reveseStr;
// }

// console.log(reverse(nameStr, 0, reveseStr));


//////////////////////////////////////////////////////////////////////


// function highest(numArr, length = 0, high = Number.NEGATIVE_INFINITY) {
//     if (length >= numArr.length) return high; // Base case: we've checked all elements
//     if (numArr[length] > high) high = numArr[length]; // Update high if current element is greater
//     return highest(numArr, length + 1, high); // Recursive call with updated length and high
// }


// function secondHigh(arr) {
//     if (arr.length < 2) return 'Array is too short'; // Check if the array has at least 2 elements
//     const highestNum = highest(arr); // Find the highest number
//     const filteredArr = arr.filter(item => item !== highestNum); // Remove all occurrences of the highest number
//     let secondHighNum = highest(filteredArr);
//     return secondHighNum;
// }

// // Example usage

// console.log(secondHigh(arr));


// const secondHighest = (arr) => {
//     if (arr.length <= 2) {
//         const [first, second] = arr;
//         return first > second ? [first, second] : [second, first];
//     }

//     const [n, ...rest] = arr;
//     const [highest, secondHigh] = secondHighest(rest);

//     if (n > highest) return [n, highest];
//     if (n > secondHigh) return [highest, n];

//     return [highest, secondHigh];
// }


// const arr = [1,2];
// const arr = [3, 2, 1];
// const arr = [1,2,3];
// const arr = [4, -7, -6];
// const arr = [-2, -7, -1];
// const arr = [3, 24,46,32,45,75, 1];
// const arr = [24, 24, 24];
// console.log(secondHighest(arr))


/////////////////////////////////////////////////////////


// function test(num1,num2,num3){
//     let maxNum = 0;
//     if(num1 > maxNum) maxNum = num1;
//     if(num2 > maxNum) maxNum = num2;
//     if(num3 > maxNum) maxNum = num3;
//     return maxNum;
// }
// console.log(test(4,5,8)) 

// function secondHig(arr){
//    let sortArr = arr.sort((a,b) => b-a);
//    return sortArr[1];
// }
// let arr = [4,5,7,2]


// console.log(secondHig(arr));


//////////////////////////////////////////////////////////////////////



// let name = 'c/:d/e/:fgr';
// let name1 = 'c/1/e/5';


// let obj = {};

// let name11 = name1.split('/');

// name.split('/').forEach((element, index) => {
//     let subArr =  element.split(':');
//     if(subArr.length === 2) obj[subArr[1]] = name11[index]

// });

// console.log(obj);


/////////////////////////////////////////////////////////////////////


// let str = 's1ho23aib4Hus5sa6in7';
// let currentValue = '';
// let total = 0;

// for (let i = 0; i <= str.length; i++) {
//     if(!isNaN(str[i]))
//     {
//      currentValue = currentValue +   str[i];
//     }else{
//         if(currentValue){
//             total +=  +currentValue;
//             currentValue = '';
//         }
//     }
// }


// console.log(total);

/////////////////////////////////////////////////////////

// Add all the digits of the ID and continue until the sum is a single digit.

// const id = '1234567';

// function sum(id) {
//   if (id.length > 1) {
//     let newId = id.split('').reduce((curr, sum) => Number(sum)+ Number(curr))
//     if(String(newId).length > 1){
//       return sum(String(newId));
//     }else{
//       return newId;
//     }
//   }
// }

// console.log(sum(id))


////////////////////////////////////////////////////////////////////////////

// let str = 'aesgserbtsrndytjdfrdrvsthdrjdt';
// function test(str) {
//     let a = str.split('').reduce((pre, curr) => {
//         if (!pre[curr]) {
//             pre[curr] = 1;
//             return pre;
//         } else {
//             pre[curr] = pre[curr] + 1
//             return pre;
//         }
//     }, {});

//     let key = 'key';
//     let value = 0;

//     for (let c in a) {
//         if (a[c] > value) {
//             key = c;
//             value = a[c]
//         }
//     }

//     return { [key]: value };


// }

// console.log(test(str))

////////////////////////////////////////////////////////////////////////////    

// function test(...a){
//     console.log(...a);
// }

// test(1,2);

//////////////////////////////////////////////////////////////////////////// 


// const emp = {};

// // Freeze the object
// Object.freeze(emp);

// // Attempt to modify the object
// emp.name = 'Alice'; // This will not work
// emp.age = 30;       // This will not work

// console.log(emp); // Output: {}

//////////////////////////////////////////////////////////////////////////// 


// function add(num1,num2){
//     "use strict"
//     num1 = 100;
//     console.log(arguments[0]+arguments[1])
// }



// function add(num1,num2){
//     // num1 = 100;
//     // console.log(arguments[0]+arguments[1])

//     console.log(arguments);
// }


// add(10,20);


//////////////////////////////////////////////////////////////////////////// 

// let str = 'Shoaib Husain';
// let capitalCount = 0;
// let totalVowels = 0;
// let vowelCounts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// for (let char of str) {
//     // Count capital letters
//     if (char >= 'A' && char <= 'Z') {
//         capitalCount++;
//     }

//     // Count vowels
//     let lowerChar = char.toLowerCase();
//     if (vowelCounts.hasOwnProperty(lowerChar)) {
//         totalVowels++;
//         vowelCounts[lowerChar]++;
//     }
// }

// // Find the vowel with the highest count
// let highestVowel = Object.entries(vowelCounts).reduce((max, [key, count]) => {
//     return count > max.count ? { key, count } : max;
// }, { key: '', count: 0 });

// console.log('totalVowels ==>', totalVowels);
// console.log('capitalCount ==> ', capitalCount);
// console.log(highestVowel.key);

//////////////////////////////////////////////////////////////////////////// 
