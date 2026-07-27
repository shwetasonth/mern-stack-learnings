
//spread in function agrgument
let arr=[5,6,7,8,45,99];
// // let res=Math.min(...arr)
// let res=Math.max(...arr)
// console.log(res)
//************************ */
//spread in console.log

// console.log(arr)
// console.log(...arr);

//spread on strings
//******************** */
// let str="shwetasonth"
// console.log(...str)

//************************* */
//spread in copy arraay 
// let arr1=[1,2,3,4,5,5,6]
// let newarr=[...arr1];
// console.log(newarr);

// let name=[..."heloo world"];
// console.log(name)

// let even=[2,4,6,8]
// let odd=[1,3,5,9];
// let allnum=[...even,...odd]
// console.log(allnum)

//********************** */
//spread with object literals

// let data={
//   email:"ironman@gmaol.com",
//   pwd:"sbsj"
// }

// let datacopy={...data,pwd:"erer",id:1234}

// console.log(datacopy)

//********************************* */
//spread in object with array
// let arr2=['a','b','c','d','e'];
// let obj={...arr2};
// console.log(obj)

//nested aray and objects

let  obj1={
  name:"shweta",
  age:34,
  address:{
    city:'gulbarga',
    marks:[2,5,3,4]
  }
  
}

let address={
  ...obj1
}
console.log(...address.address.city)
console.log(...address.address.marks)