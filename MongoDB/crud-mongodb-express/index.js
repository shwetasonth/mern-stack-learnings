const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");
const Customerror = require("./Customerror.js");

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
app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find();
    // console.log(chats);
    if (!chats) {
      throw new Customerror(401, "Page not found");
    }
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

//create chat form
app.get("/chats/new", (req, res, next) => {
  try {
    res.render("newchat.ejs");
  } catch (err) {
    next(err);
  }
});

//create chat in db
app.post("/chats", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;

    await Chat.insertOne({
      from,
      to,
      msg,
      created_At: new Date(),
    });
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//edit form for chat message
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;

    let chat = await Chat.findById(id);
    res.render("editchat.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

//edit chat
app.put("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let result = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, new: true },
    );
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//delete chat
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

//error handling middleware
app.use((err, req, res, next) => {
  let { status = err.status|| 500, msg = err.message||"some error occured" } = err;
  res.status(status).send(msg);
});

app.listen(port, () => {
  console.log(`App running at port no ${port}`);
});
