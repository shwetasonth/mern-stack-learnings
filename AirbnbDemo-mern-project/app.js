const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const path = require("path");
const flash=require("connect-flash");

const app = express();
const listings = require("./Routes/listings.js");
const reviews = require("./Routes/review.js");
const port = 8000;

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true
  }
};
app.use(session(sessionOptions));
app.use(flash());
// custom middlewares
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
//set path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

//middlewares
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

//connection to mongodb
const MONGO_URL = "mongodb://127.0.0.1:27017/AirbnbDB";
async function main() {
  mongoose.connect(MONGO_URL);
}

//mongoose connection
main()
  .then(() => {
    console.log("Connection established successfully!!!");
  })
  .catch((err) => console.log(err));





//Routes
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

//if non of the routes match this error handler executed
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

//error handler middleware
app.use((err, req, res, next) => {
  let { statuscode = 500, message = "Somthing went wrong" } = err;
  res.status(statuscode).render("listings/error.ejs", { err });
});

app.listen(port, () => {
  console.log(`App stated at port ${port}`);
});
