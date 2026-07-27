// const student = {
//   name: "shweta",
//   age: 34,
//   eng: 99,
//   maths: 100,
//   soc: 100,
//   getAvg() {
//     //shorthand for method /function of object
//     console.log(`avergae is ${(this.eng + this.maths + this.soc) / 3}`);
//     console.log(`${this.name}`);
//   },
// };
// student.getAvg();

//example 2 this keyword

// let person1={
//   name:"shweta",
//   greet:function(){
//     console.log(this.name);
//   }
//   }

//   let person2={
//     name:"jagdish",
//     greet:person1.greet
  
//   }

//   person1.greet()
//   person2.greet()

//example

let person={
  name:"shweta",
  show(){
    return function(){
      console.log(this.name)
    }
  }
}

person.show()();
person.show();//not print anything since it have no console just returning function

//normal function without object this refers to window object if strict mode than undefined