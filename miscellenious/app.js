//object Orientd Programming concepts explanation

/***
 * Prototype
 * New Operator
 * constructors
 * classes
 * keywords(extends,super)
 */

//These concepts makes the code more efficient by not repeating code
//prototype are the place where all objects can accese same method and properties by default without creating their own

//using arr.__prototype__ property can change function definition of objects
//this proprety gives only copy of function which does not change actual function definiton 
//Prototype

let arr=[1,2,3];
let arr2=[13,4,5];

arr.sayHello=()=>{
  console.log("hello!,i am arr");
}
arr.sayHello();

//changing function definition in prototype of array
arr.__proto__.push=(n)=>{
  console.log("pushing number : ",n)
}

console.log(arr.push(7));

//changing actual definition of arr in prototype 
//Array.prototype
//String.prototype
 