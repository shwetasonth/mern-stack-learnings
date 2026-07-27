// setTimeout

// console.log("hello there!");

// setTimeout(()=>{
//   console.log("Apna school")
// },4000)

// console.log("welcome to");
// console.log("welcome to");
// console.log("welcome to");
// console.log("welcome to");
// console.log("welcome to");
// console.log("welcome to");

//setInterval
// let id=setInterval(()=>{
//   console.log("Apnna school")
// },5000);

// console.log(id)
// clearInterval(id)

// let id1=setInterval(()=>{
//   console.log("hellow worldl")
// },3000);

// console.log(id1)

// clearInterval(id1)

//Write a function that prints "hello world " 5times at intervals of 2s each

let id=setInterval(()=>{
  console.log("Hello World")
},2000);

setTimeout(()=>{
clearInterval(id);
console.log("clearinterval ran")
},10000)