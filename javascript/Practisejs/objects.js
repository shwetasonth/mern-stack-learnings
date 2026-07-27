const student = {
  name: "shraddha",
  age: 23,
  marks: 98.7,
};

const item = {
  price: 100.99,
  discount: 50,
  colors: ["red", "pink"],
};

//thrread or post

const post = {
  username: "@shraddhakhapra",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@apnacollege", "@delta"],
};

//access / get object values

console.log(post.tags);
console.log(post["content"]); //key value of object

let prop = "reposts";
let prop2 = "username";
console.log(post[prop]);
console.log(post[prop2]);

let obj = {
  1: "a",
  2: "b",
  null: "cv",
  undefined: "ajdhdh",
  Nan: "shwe",
  true: "ta",
};
//  console.log(obj.1)
//  console.log(obj.null)
//  console.log(obj.true)
//  console.log(obj.Nan)

//add/updat object literals
const stu = {
  name: "shraddha",
  age: 23,
  marks: 67.9,
  city: "delhi",
};

//change existing key  city to mumbai
// stu.city="mumbai"

//add new property or key to object

// stu.gender="female";

// delete key value pair

// delete stu.marks
// console.log(stu)

// objects of objects
// storing information of multiple students
// let classInfo={
//   aman:{
//     grade:"a",
//     city:"pune"
//   },
//   shradha:{
//     grade:"a+",
//     city:"delhi"
//   },
//   revan:{
//     grade:"o",
//     city:"japan"
//   },
// }

// console.log(classInfo.revan.city)

// ARRAY OF OBJECTS

// const classInfo = [
//   {
//     name: "revan",
//     grade: "o",
//     city: "japan",
//   },
//   { name: "shweta", grade: "a", city: "gulbarga" },
//   { name: "kalirani ", grade: "o", city: "delhi" },
// ];

// console.log(classInfo[1].name)
// console.log(classInfo[0]["name"])
// let name1=classInfo[2].name;
// console.log(classInfo[2][name1])