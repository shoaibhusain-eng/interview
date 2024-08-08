//////////////////////////////////////////////////////////////////////

// what is typeScript
// typeScript is a superset of JavaScript
// typeScript is a strongly typed language
// it detect error at compile time

//////////////////////////////////////////////////////////////////////


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
  
