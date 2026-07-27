//program to find first n n elements of an array that are positiv number

// let n=[7,9,0,-2];


// console.log(n.slice(0,3))
// console.log(n.slice(0,3))

//WAP to check whether a string is blank or not

// let str='';
// if(str){
//   console.log("string is not empty")
// }
// else{
// console.log("string is empty")
// }

//WAP to test whethr the charater at the given index is lower case

// let name='apnaCollege';
// let idx=3;
// if(name[idx]===name[idx].toLowerCase()){
//   console.log('character is in lower case')
// }else{
//   console.log('character is not in lower case')

// }

//WAP to remove space from front and tail 

// let str=prompt("please enter a string");
// console.log(`original string =${str}`);
// console.log(`string without spaces=${str.trim()}`);

//WAP to check if n element exists in an array or not
let arr=['hello','a',23,64,99,-6];
let item=64;
if(arr.indexOf(item)!=-1){
  console.log("element exists in array");
}else
console.log("element does not exists in array");




if(arr.includes(994)){
  console.log('element exists')
}else
console.log('element does not  exists')