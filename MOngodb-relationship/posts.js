const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongodbRealtion");

  // await addOrders();
  await addData();
  await mongoose.connection.close();
}

let userSchema = new Schema({
  username: String,
  email: String,
});

let postSchema = new Schema({
  comment: String,
  likes: Number,
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "Instauser",
    },
  ],
});

let Instauser = mongoose.model("Instauser", userSchema);
let Post = mongoose.model("Post", postSchema);

async function addData() {
  let user1 = new Instauser({
    username: "shweta",
    email: "shweta@gmail.com",
  });

  let user2 = await Instauser.findOne({ username: "kasturi" });

  let post4 = new Post({
    comment: "ai rocks this era",
    likes: 89,
  });

  post4.user = user2;

  // await user1.save();
  // await post4.save();

  let res = await Post.find().populate("user");
  let names=res.map((user)=>{

    console.log(user);
  });

}

main()
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));
