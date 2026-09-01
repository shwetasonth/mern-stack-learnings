const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");

const app = express();
const listings = require("./Routes/listings.js");
const reviews = require("./Routes/review.js");
const port = 8000;

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
