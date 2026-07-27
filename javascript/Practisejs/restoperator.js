//rest storing multiple values

// function sum(...args){
//   for(let i in args){
//     console.log(args[i])
//   }
// }

// sum(3,2,6,7)

//*** */

// function min(){
//   console.log(arguments.length)//arguments is default prop in js function
//   console.log(arguments)
//   console.log(...arguments)
// }
// min(3,5)

//****************** */
// function sum(...args){
//   return args.reduce((sum,el)=>sum+el)
// }

// console.log(sum(2,3))


//****************** */

// function min(msg,...args){    //always rest must be written at last and only  1 rest param is used
//   console.log(msg)
//   return args.reduce((min,el)=>{
//     if(min>el){
//       // console.log(el)
//       return el;
//     }else{
//       // console.log(el)
//       return min;
//     }
//   })
// }

// let r=min("min",5,6,7,0,-1);
// console.log(r)


/********************* */

// Destructuring

// storing values of aray into multiple variables
 //array

 let names=["tony","bruce","peter","steve"];
// let winner=names[0]
// let runnerup=names[1]
// let secinwinner=names[2];

// let [winner,runnerup,...others]=names;
// console.log(winner)
// console.log(runnerup)
// console.log(others)


//******************* */
//object destructring

let student={
  name:"shweta",
  age:67,
  class:9,
  subjects:["hindi","english","maths","science"],
  username:'janvi@13',
  pwd:'jkhsdh'
}

// let {name,age,userdetails}=student;//variable name must be same as key name


// console.log(name)
// console.log(age)
// console.log(userdetails)//variable name i not as key name

//changing name of key in destructure
// let {name,age,...username}=student;
// console.log(name)
// console.log(age)
// console.log(username)


// let {name,age,username:user,pwd}=student;
// console.log(name)
// console.log(age)
// console.log(user)
// console.log(pwd)

/************ */
//default property while destructiong
let {name,age,username:user,city='gulbarga'}=student;//default value assignning
console.log(name)
console.log(age)
console.log(user)
console.log(city)