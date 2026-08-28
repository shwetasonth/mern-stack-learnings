const mongoose = require("mongoose");
const { Schema } = mongoose;
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongodbRealtion");

  // const result = await User.deleteMany({});
  // console.log(`${result.deletedCount} User documents deleted`);

  // await mongoose.connection.close();
}

// one to Many relation modelapproach 1
let userSchema = new Schema({
  username: String,

  address: [
    {
      _id:false,
      location: String,
      city: String,
    },
  ],
});

let User = mongoose.model("User", userSchema);

main()
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err));

async function addUser() {
  let user1 = new User({
    username: "sushi",
    address: [{ location: "bhagya nagar", city: "gulbarga" }],
  });


  await user1.address.push({location:"prabhu nagar",city:"ratnagiri"});

   user1.save().then((result)=>{
console.log(result)
   }).catch(err=>{console.log(err)});
}

addUser();


//One to Many (1xm) Approach 2
//only reference of the child is saved in parent model i.e storing reference /pointer to child 



