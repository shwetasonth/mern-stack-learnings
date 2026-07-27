

// let square=n=>n**2;
// console.log(square(5));

// let sum=(a,b)=>{
//   console.log(a+b)
// }

// sum(3,4);

// // implicit return in arrow function

// const mul=(a,b)=>a*b;
// console.log(mul(5,4));

//this in Arrow function

// let student={
//   name:'revan',
//   age:29,
//   marks:99,
//   getName:function(){  //normal function here 'this' refers who is calling i.e student
//     console.log(this)
//           console.log(this.name)
//   },
//   getMarks:()=>{
//     console.log(this)//arrow functio 'this' refers to its parents scope
//           console.log(this.marks)
//   }
// }
// // student.getName()
// student.getMarks()//


//if using window object functions

let student={
  name:'sakshi',
  age:78,
  marks:89,

  getInfo1:function(){
    setTimeout(()=>{
      console.log(this)//student
    },2000);
  },

  getInfo2:function(){
    setTimeout(function(){
      console.log(this);//window
    },2000);
  }
}

student.getInfo1();
student.getInfo2();