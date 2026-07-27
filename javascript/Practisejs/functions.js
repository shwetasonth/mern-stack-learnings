// function printPoem(){
//   console.log("Twinkle Twinkle,little star");
//   console.log("how I wonder what you are");
// }
// printPoem();

//WAP to roll a dice and always display the value of the dice(1 to 6)

// function rollDice(){
//   let diceValue=Math.floor(Math.random()*6)+1;//values from 1 to 6 hence maximum limit is 6 thats why multiplied by 6

//   console.log(diceValue)
// }

// rollDice()

//Parameter in functions

// function greet(name){//name is parameter in function definition
//   console.log(`Good morning ${name}`)
// }

// greet("shweta-sonth")//"shweta" is actuall value i.e argument in function call

//sum of numbers

// function sum(a,b){
//   console.log(a+b)
// }
// sum(3,2)
// sum(3)

//RETURN KEYWORD
//average of 3 numbers

// function average(n1,n2,n3){
//   return ((n1+n2+n3)/3)
// }

// let res=average(2,2,2);
// console.log(res)

//WAP to write multiplication table of a given number

// function printTable(number){
//   let count=0;
//   for(let i=2;i<=(number*10);i=i+number){

// count+=1;
//     console.log(`${number}'*'${count}=${i}`)
//   }
// }

//  printTable(2)
//  printTable(9)

//function with return keyword as argument within anothr function

// function sum(a,b){
//   return a+b;
// }

// let result=sum(sum(2,2),4);
// console.log(result)

//once return keyword is executed function exits code written after return keyword will not be executed

// function isAdult(age){
//   if(age>=18){
//     return "adult";
//   }else{
//     return "not adult"
//   }
//   console.log("bye bye");
// }

// let r=isAdult(2);
// console.log(r);

//WAP that returns the sum of numbers 1 to n

// function sum(n){
//   let sum=0;
//   for(let i=1;i<=n;i++){
//     sum+=i;
//   }
//   return sum;

// }

// let r=sum(3);
// console.log(r)

//WAP concate all strings in an rray
// function concat(str){
//   let r=[]

//   for(let i of str){
//     r+=i;
//   }
//   console.log(a)
//   console.log(r)
//   console.log(typeof(r),r.length)
// }

// concat(a)
//print stars
// let a = [];

// for (let i = 0; i <= 9; i++) {
//   console.log("*");
//   for (let j = 0; j<=9;j++) {
//     console.log("*");
//     a[i][j]="*";
//     console.log(a);
//   }
// }

//function scope

// let sum=10;//global scope
// function calsum(a,b){
//   let sum=a+b;//function scope
//  console.log(sum,"function scop has more specificity than global inside function")
// }

// calsum(2,2)

// console.log(sum,"Global scope has more specificity outside the function ");//function variable sum cannot be accesed outside the function

//Block scope
//
// console.log(a)//a cannot be aaccesed
// console.log(b)//a cannot be aaccesed
// console.log(c)//a can be aaccesed but var is not used

//lexical scope

// function outerFunc(){
//   let a=2;
//   let b=5;

//   function innerFunc(){
//     console.log(a,b)//inner func can access outer func variables
//   }

//   innerFunc()
// }
// outerFunc()


 
// function outerFunc() {
//   function innerFunc() {
//     let a = 2;
//     let b = 5;
//   }
//   console.log(a, b); //outer func cannot  access inner func variables

//   innerFunc();
// }

// outerFunc()


// function outerFunc(){
//   let a=8;
//   let b=8;

//   function innerFunc(){
//     console.log(a,b)
//   }
//   innerFunc();
// }

//  innerFunc();//error because innerfunc scope is function scope cannot be used outside 

// Practise  question

// let greet="hello";

// function changeGreet(){
//   let greet="namaste";
//   console.log(greet);

//   function innerGreet(){
//     console.log(greet)
//   }
// }

// console.log(greet);
// changeGreet()


//function expression

// let str="shweta";

// let sum=function(func) {
//  func()
// }

//function expression as argument
// let hello=function(){
//   console.log("i am argument function")
// }

// sum(hello);//hello sent as a argument in a function


//function as argumnt or higher order function 
// let multiplegreet=function(func,n){
//   for(let i=1;i<=n;i++){
//     func()
//   }
// }
// let greet=function(){
//   console.log("hello")
// }

// multiplegreet(greet,30)



//higher order functions which returns new functions are factory functions




// let oddorevenFactory=function(request)
// {
//   if(request=='odd')
//     {
//     let odd=function(n){
// console.log(!(n%2==0))
// }

// return odd;
//   } 
//   else if(request=='even'){
// let even=function(n){
//   console.log((n%2==0))
// }
// return even;
//   }

// else{
//   console.log("wrong request")
// }}

//let request=oddorevenFactory('even');//odd or even function definition is stored in r

// console.log(request(4));//


//Methods 

// const calculator={
//   add:function(a,b){
//     return a+b;
//   },
//   sub:function(a,b){
//     return a-b;
//   },
//   mul:function(a,b){
//     return a*b;
//   },
// }

// let sum=calculator.add(5,8);
// let sub=calculator.sub(15,8);
// let mul=calculator.mul(5,8);
// console.log(sum,sub,mul)
// console.log(calculator)
// console.log(calculator.add)//gives function definition sam as how we access key of objects
// console.log(calculator.add())//executes function 

// method shorthand

let calcultor={
//here 'function'keyword is not used 
//function name is key
  add(a,b){
    return a+b;
  },
  sub(a,b){
    return a-b;
  },
  mult(a,b){
    return a*b;
  }
}

let sum=calcultor.add(5,8);
console.log(sum)
