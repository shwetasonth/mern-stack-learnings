const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/amazon`);
}

//connection to mongodb
main().then(() => {
  console.log("Connection successfull");
});

//schema

const userBook = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    String,
  },
  cost: Number,
});

//Model(collection)/(Table)
const Book = mongoose.model("Book", userBook);

//instance method
// let book = new Book({
//   title: "ikigai",
//   author: "abc",
//   cost: 1000,
// });

// book
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//class Book method
Book.insertOne({
  title: "maths",
  author: "RD Sharma",
  cost: 400,
}).then((data) => {
  console.log(data);
}).catch(err=>console.log(err));

Book.find().then((data)=>{
  console.log(data);
  console.log(data.length);
})