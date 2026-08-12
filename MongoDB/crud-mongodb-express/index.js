const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");

const port = 8000;

//set path
app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/whatsup`);
}
main()
  .then(() => {
    console.log("connection to mongodb successfull");
  })
  .catch((err) => console.log(err));

//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

//create chat form
app.get("/chats/new", (req, res) => {
  res.render("newchat.ejs");
});

//create chat in db
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;

  //whenever then is used no need to use await since it handles asynchronous behaviour
  Chat.insertOne({
    from,
    to,
    msg,
    created_At: new Date(),
  })
    .then((data) => {
      console.log(data, "chat was saved");
    })
    .catch((err) => console.log(err));
  res.redirect("/chats");
});

//edit form for chat message
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;

  let chat = await Chat.findById(id);
  res.render("editchat.ejs", { chat });
});

//edit chat
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg:newMsg } = req.body;
  let result = await Chat.findByIdAndUpdate(id, { msg: newMsg}, { runValidators:true,new: true });
  res.redirect('/chats')
});


//delete chat
app.delete("/chats/:id",async(req,res)=>{
  let {id}=req.params;
  let deletedChat=await Chat.findByIdAndDelete(id);
console.log(deletedChat)
  res.redirect("/chats")
});


app.listen(port, () => {
  console.log(`App running at port no ${port}`);
});
