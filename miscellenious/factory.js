//Factory Function

// function PersonMaker(name,age){
//   const person={
//     name:name,
//     age:age,
//     talk(){
//       console.log(`Hi,my name is ${name}`)
//     }
//   }
//   return person;
// }

// let p1=PersonMaker("shweta",22);
// let p2=PersonMaker("sushmita",24);

// p1.talk();
// p2.talk();

//To overcome this we use NEW opertor and constructors

// function Person(name,age){
//   this.name=name;
//   this.age=age;
// }

// Person.prototype.talk=function(){
//   console.log(`hi my name is ${this.name}`)
// }
// console.log(Person.prototype);//prototype is a object template

// //creating instance of Person constructor using new operator
// let p1=new Person("adam",20);
// let p2=new Person("eve",20);

// p1.talk();
// p2.talk();

//More efficient way  is to create class

//***********CLASS************ */

// class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
// talk() {
//   console.log(`Hi i am ${this.name}`)
// }
// }

// //creating class instance

// let p1=new Person("adam",87)
// let p2=new Person("tony",89)

// p1.talk();
// p2.talk();
// console.log(Person)
// console.log(p1.name,p1.age)
// console.log(p2.name,p2.age)

/********INHERITANCE************** */

// example 1

// class Person {
//   constructor(name, age) {
//     console.log("parent constructor");
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`hi i am ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, marks) {
//     super(name, age);//always call super constructor within constructor 
//     console.log("Student constructor");
//     this.marks = marks;
//   }
//   greet() {
//     console.log("Goodmrning teacher");
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     console.log("Teacher constructor");
//     super(name, age);
//     this.subject = subject;
//   }
// }


// let s1=new Student("reema",18,88);
// let t1=new Teacher("rita",34,"english");

// s1.talk();
// s1.greet();
// t1.talk();

//example 2

class Mammel{
  constructor(name){
    this.name=name;
    this.type="warm-blooded"
  }
  eat(){
    console.log(`I am eating `)
  }
}

class Dog extends Mammel{
  constructor(name){
    super(name)
  }
  bark(){
    console.log("bow bow....",this.name)
  }
}

class Cat extends Mammel{
  constructor(name){
    super(name)
  }
  Mew(){
    console.log("Meo Meo....",this.name)
  }
}

let mamal1=new Cat("lilly");
let mamal2=new Dog("sheru");

// mamal1.Mew();
// mamal1.eat();
// mamal2.bark();
// mamal2.eat();

console.log(mamal1.name)
console.log(mamal1.type)
console.log(mamal1.eat())