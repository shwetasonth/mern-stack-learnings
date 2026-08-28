const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongodbRealtion");

  // await addOrders();

  // await addCust();
  await delCust();
  await mongoose.connection.close();
}

//order schema
let orderSchema = new Schema({
  name: String,
  price: Number,
});

//customer schema
//in customer schema even though only whole orders we have pushed but it has only objectid in orders array
let customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("i am pre middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  console.log("i am post middleware");
  if (customer.orders.length > 0) {
    let result = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(result);
  }
});

let Order = mongoose.model("Order", orderSchema);
let Customer = mongoose.model("Customer", customerSchema);
// async function addOrders() {
//   let result = await Order.insertMany([
//     { name: "samosa", price: 12 },
//     { name: "noodles", price: 45 },
//     { name: "veg sandwictch", price: 30 },
//   ]);

//   console.log(result);
// }

async function addCustomer() {
  // let cust1=new Customer({
  //   name:"simmi"
  // })

  //   let order1=await Order.findOne({name:"samosa"})
  //   let order2=await Order.findOne({name:"noodles"})
  //   console.log(order1,order2)
  //   cust1.orders.push(order1,order2);
  //   let result=await cust1.save();
  let result = await Customer.find({}).populate("orders").exec();
  console.log(result[1]);
}

// addCustomer();

//handling deletion in  1xm (one to many ) relation using mongoose middlewares

async function addCust() {
  let newCust = new Customer({
    name: "rimi",
  });

  let newOrder = new Order({
    name: "burger",
    price: 120,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();
  console.log("added new customer");
}

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("6a920e1fe21e2823d94b5bd2");
  console.log(data);
};

main()
  .then(() => console.log("mongo db connected successfully "))
  .catch((err) => console.log(err));
