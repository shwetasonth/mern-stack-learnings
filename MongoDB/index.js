const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => err);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// inserting many values in array direct by model

const User1 = mongoose.model("User1", userSchema);
// User1.insertMany([
//   {
//     name: "roshan",
//     email: "ro@gmail.com",
//     age: 23,
//   },
//   {
//     name: "preeti",
//     email: "pro@gmail.com",
//     age: 23,
//   },
//   {
//     name: "nidhi",
//     email: "nidhi@gmail.com",
//     age: 23,
//   },
//   {
//     name: "priya",
//     email: "priya@gmail.com",
//     age: 23,
//   },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// const user1 = new User1({
//   name: "shweta",
//   email: "s@yahoo.com",
//   age: 34,
// });

//inserting only 1 value by createing instance
// const Employee = mongoose.model("Employee", userSchema);
// const employee1 = new Employee({
//   name: "shree",
//   email: "shree@yahoo.com",
//   age: 8,
// });
// employee1.save();

// user1.save();

//Find document in collection

// User1.find({age:{$gte:30}}).then((data)=>console.log(data));

// User1.find({$or:[{name:"preeti"},{email:"nidhi@gmail.com"}]}).then((data)=>{
//   console.log(data);
//   console.log(data.length);

// });

//update document in collection
//return s only acknowledgment

// User1.updateOne({name:"shweta"},{name:"revan",email:"revan@gmail.com",age:18}).then((data)=>{
//   console.log(data)
// });
// User1.updateMany({name:"shweta"},{age:22}).then((data)=>{
//   console.log(data)
// });

//find and update document at a time and return update data of document in collection

// User1.findOneAndUpdate(
//   { name: "shweta" },
//   { name: "latika", email: "latika@yahoo.com", age: 65 },
//   { new: true },
// ).then((data) => {
//   console.log(data);
// }).catch(err=>console.log(err));

//delete document in collection
//4 methods  

// User1.deleteMany({
//   _id: {
//     $in: [
//       "6a7b3272f06043a51631f175",
//       "6a7b328bcce1521a275e6da5",
//       "6a7b48f385f05f9639e6f0f5",
//       "6a7b4aaadfd531acfa12a312",
//       "6a7b4b124b91da9541a2e313",
//       "6a7b4ba51f56eef81e6079b3",
//     ],
//   },
// }).then((res) => console.log(res));

// User1.deleteOne({name:"shweta"}).then((res)=>{
//   console.log(res)
// }).catch((err)=>console.log(err))


// User1.findByIdAndDelete({_id:'6a7b4f7815146baab6c84259'}).then((res)=>{
//   console.log(res)
// }).catch((err)=>console.log(err))

// User1.findOneAndDelete({name: 'priya'}).then((res)=>{
//   console.log(res)
// }).catch((err)=>console.log(err))





//display all document in collection
// User1.find({}).then((data) => {
//   console.log(data);
//   data.map((user)=>{

//     console.log(user.name);
//     console.log(user.email);
//     console.log(user.age);
//   })
// });

