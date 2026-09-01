const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchemaa } = require("../schema.js");

const Listing = require("../Models/listing.js");



//validation function for server side for listing
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//index route show all listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index.ejs", { alllistings });
  }),
);

//add new listing form
router.get("/new", (req, res) => {
  res.render("listings/newListing.ejs");
});

//show specific listings in detail
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/showlisting.ejs", { listing });
  }),
);

//create new route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

//edit form route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/editlistings.ejs", { listing });
  }),
);

//update listing route
router.put(
  "/:id",
  validateListing,
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
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndDelete(id);
    console.log(listing);
    res.redirect("/listings");
  }),
);



module.exports = router;
