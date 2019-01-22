// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myfunction = () => {};
// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param) => param;
// let add = function (param1, param2) {
//   return param1 + param2;
// };


let add = (a, b) => a + b;
console.log(add(1,2));
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };

let subtract = (a, b) => a - b;
console.log(subtract(1,2));

let exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const triple = exampleArray.map((num) => num * 3);
console.log(triple);