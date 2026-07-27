/*
*array methods
*forEach
*map
*filter
*every
*some
*reduce


*/

//forEach

// let arr=[1,2,3,4,5,6 ];
// arr.forEach(function(el){
//   console.log(el)
// })
// let arr1=[1,2,3,4,5,6 ];
// arr.forEach((el)=>{
//   console.log(el)
// })

//forEach for array of objects
// let arr2=[{name:'shweta',marks:98},{name:'revan',marks:99},{name:'janvi',marks:99}]

// arr2.forEach(function(el){
//   console.log(el)
//   console.log(el.name,el.marks)
// })

// let arr3=['shweta','jagdish']
// arr3.forEach(function(el){
//   console.log(el.toUpperCase())
// })

 //map method
//  let num=[1,2,3,4,5];

//  let result=num.map((el)=>el*2);
//  console.log(result);


//  let result=num.map(function(el){
//  console.log("if returned nothing than nw array i.e result array will be undefined with 5values");
// });
// console.log(result)

//map on objects

// let students=[{name:'shweta',marks:98},{name:'revan',marks:99},{name:'janvi',marks:99}]
// let gpa=students.map((el)=>el.marks/10)
// console.log(gpa)

//filter() method

// let num=[2,4,1,5,6,2,7,8,9];
// let res=num.filter((num)=>(num%2==0));
// console.log(res)

//every()  logical &&

// let res=[1,2,3,4,5].every((el)=>el%2==0);
// console.log(res);

// let res1=[2,4,8].every((el)=>el%2==0);
// console.log(res1);

//some()
// let res=[1,2,3,4,5].some((el)=>el%2==0);
// console.log(res);

// let res1=[2,4,8].some((el)=>el%2==0);
// console.log(res1);


//reduce()

// let res=[1,2,3,4,5].reduce((acc,cur)=>{ 
  
//   console.log(acc);
  
//  return acc*cur},1);
// console.log(res)

//maximum value in an array

let arr=[1,4,2,5,6,7,2,9,2];
// let max=-1;
//without reuce()
// for(let i=0;i<arr[i];i++){
//    if(max<arr[i]){
//     max=arr[i];
//    }
// }
// console.log(max)

// let max=arr.reduce((max,el)=>{
//   console.log(max)
// if(max<el){
//   return el;
// }else{
//   return max;
// }
// });
// console.log(max)

 //check if all numbers in our array are multipls of 0 or not
 //whenever comparison with all numbers use every()

 //Default parameters

 function sum(a,b=3){
  return a+b;
 }
 
 console.log(sum(3));
