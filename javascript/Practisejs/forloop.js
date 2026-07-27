// for(let i=1;i<15;i++){
// if(i%2!=0){
//   console.log(i);
// }
// }

// or

// for(let i=1;i<15;i=i+2){

//   console.log(i);

// }

// console.log("backwardloop");
// for(let i=15;i>=1;i=i-2){

//   console.log(i);

// }

// print even numbrs (2 to 10)

// for(let i=2;i<=1000;i=i+2){
//   console.log(i)
// }

// console.log("backwardloop");
// for(let i=1000;i>=2;i=i-2){
//   console.log(i)
// }

//print multiplication table of 5

// for(let i=5;i<=50;i=i+5){
//   console.log(i);
// }
//print multiplication table of 3
// let n = prompt("please enter a number");
// console.log(typeof(n));
// n=parseInt(n);//converst string to number
// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

// let i=2;
// console.log(`${i}, ${i++},${i}`)
// i=2;
// console.log(`${i}`);
// console.log(`${i++}`)
// console.log(`${i}`)


// let fruits=["apple","banana","mango","grapes"];
// for(let i=0;i<fruits.length;i++){
//   console.log(fruits[i]);
// }
// let fruits=["apple","banana","mango","grapes"];
// for(let i=0;i<fruits.length;i=i+2){
//   console.log(fruits[i]);
// }

//print fruits in reverse order

// let fruits=["apple","banana","mango","grapes"];
// for(let i=fruits.length-1;i>=0;i--){
//   console.log(fruits[i]);
// }

// let heroes=[["ironman","spiderman","thor"],["superman","wonder women","flash"]];

// for(let i=0;i<heroes.length;i++)
//   {
//   console.log(`List #${i}`,heroes[i].length-1)
//   for(let j=0;j<heroes[i].length;j++){
//     console.log(heroes[i][j])
//   }
// }

//list of students using arrays

// let students=[["seema",99],["shweta",99],["janvi",89]]

// for(let i=0;i<students.length;i++){
//   console.log(`list of students #${i}`);

//   for(let j=0;j<students[i].length;j++){
//     console.log(students[i][j]);
//   }
// }


//for of 

// let furniture=['chair','table','dining','stool'];

// for(item of furniture){
//   console.log(item)
// }

// let str='apnacollege';
// for(item of str)
// console.log(item)

//Nested arrays of 'for of'

let heroes=[["superman","batman","wonder women"],["spiderman","ironman","thor"]]

for(list of heroes){
  console.log(list)

  for(hero of list){
    console.log(hero)
  }
}