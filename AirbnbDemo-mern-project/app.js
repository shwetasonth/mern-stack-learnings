const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");
const app = express();
const port = 8000;

const Listing = require("./Models/listing.js");

//set path

app.set("view-engine", "ejs");
app.set("views", path.join("views"));
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

//validation function for server side
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//index route show all listings
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index.ejs", { alllistings });
  }),
);

//add new listing form
app.get("/listings/new", (req, res) => {
  res.render("listings/newListing.ejs");
});

//show specific listings in detail
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  console.log(listing);
  res.render("listings/showlisting.ejs", { listing });
});

//create new route
app.post(
  "/listings",validateListing,
  wrapAsync(async (req, res, next) => {
    let result = await Listing.insertOne(req.body.listing);
    res.redirect("/listings");
  }),
);

//edit form route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/editlistings.ejs", { listing });
  }),
);

//update listing route
app.put(
  "/listings/:id",validateListing,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    console.log(req.body);
    console.log(id);
    let newListing = await Listing.findByIdAndUpdate(id, req.body.listing, {
      runValidators: true,
    });
    res.redirect(`/listings/${id}`);
  }),
);

//destroy route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndDelete(id);
    console.log(listing);
    res.redirect("/listings");
  }),
);

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
