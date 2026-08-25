const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");
const Customerror = require("./Customerror.js");

const port = 8000;



//asynWrap function for error handling in async routes without try and catch
//this function handles error only async errors validation errors not mongoose errors
function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch(err=>next(err))
  }

}
//set path
app.set("view engine", "ejs");
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
app.get("/chats",  asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    // console.log(chats);
    if (!chats) {
      throw new Customerror(401, "Page not found");
    }
    res.render("index.ejs", { chats });

}));

//create chat form
app.get("/chats/new", (req, res, next) => {
    res.render("newchat.ejs");

});

//create chat in db
app.post("/chats",  asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body;

    await Chat.insertOne({
      from,
      to,
      msg,
      created_At: new Date(),
    });
    res.redirect("/chats");
  
}));

//edit form for chat message
app.get("/chats/:id/edit", asyncWrap( async (req, res, next) => {

    let { id } = req.params;

    let chat = await Chat.findById(id);
    res.render("editchat.ejs", { chat });

}));

//edit chat
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let result = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, returnDocument: "after" },
    );
    res.redirect("/chats");
}));

//delete chat
app.delete("/chats/:id",  asyncWrap(async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
}));


function handleValidationErr(err){
  console.log("This was a Validation error.Pleaase follow rules");
  console.dir(err.message);
  return(err)
}


//error handling middleware 1
app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name==="ValidationError"){
   err= handleValidationErr(err)
  }
  next(err);
})
//error handling middleware 2
app.use((err, req, res, next) => {
  let { status = err.status|| 500, msg = err.message||"some error occured" } = err;
  res.status(status).send(msg);
});

app.listen(port, () => {
  console.log(`App running at port no ${port}`);
});
