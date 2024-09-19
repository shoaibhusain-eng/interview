//////////////////////////////////////////////////////////////////////

// what is typeScript
// typeScript is a superset of JavaScript
// typeScript is a strongly typed language
// it detect error at compile time

//////////////////////////////////////////////////////////////////////
//  Differences JavaScript and TypeScript 

// 1) 
// JavaScript is a dynamically typed language, meaning types are determined at runtime. 
// This can lead to runtime errors if types are not as expected.

// JavaScript (no type annotations)
// function greet(name) {
//     return `Hello, ${name}`;
//   }

// TypeScript is a statically typed superset of JavaScript

// TypeScript
// function greet(name: string): string {
//     return `Hello, ${name}`;
//   }
  

// 2) 
// don't have interface

// support interface

// 3)

// JavaScript:
// JavaScript is an interpreted language, 
// meaning it is executed directly by the browser or 
// Node.js environment without a compilation step.

// TypeScript:
// TypeScript needs to be compiled into JavaScript before it can be executed. 
// The TypeScript compiler (tsc) translates TypeScript code into JavaScript code.

// 4)
// JavaScript:
// Error checking is performed at runtime. 
// Type-related errors can only be detected when the code is executed.

// TypeScript:
// TypeScript performs compile-time error checking. 
// It can catch errors related to type mismatches, 
// missing properties, and other issues before the code is run.

// 5)
// JavaScript:
// JavaScript runs natively in all modern browsers and environments.

// TypeScript:
// TypeScript code needs to be compiled into 
// JavaScript to run in browsers or Node.js


// Difference between Type and Interface in TypeScript:

// Interface is less flexible when compared to typescript types. 
// It uses the “type” keyword for creating new type. 
// It uses the “interface” keyword for declaring an interface.

    // interface                                        type
// Defines the shape of an object or class.         Uses type and can define more complex types.

// interface Person {                               // type Person = {
//     name: string;                                //     name: string;
//     age: number;                                 //     age: number;
//   }                                              //   };






// Basic type alias
// type Point = {
//     x: number;
//     y: number;
//   };
  
//   // Union type
//   type Shape = Circle | Square;
  
//   type Circle = {
//     kind: "circle";
//     radius: number;
//   };
  
//   type Square = {
//     kind: "square";
//     sideLength: number;
//   };
  
//   // Intersection type
//   type ColoredShape = Shape & {
//     color: string;
//   };
  
//   // Using the type
//   const point: Point = { x: 10, y: 20 };
//   const circle: Circle = { kind: "circle", radius: 5 };
//   const square: Square = { kind: "square", sideLength: 10 };
//   const coloredSquare: ColoredShape = { kind: "square", sideLength: 10, color: "blue" };
  
