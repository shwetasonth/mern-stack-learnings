const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const Listing = require("../Models/listing.js");

//index route show all listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index.ejs", { alllistings });
  }),
);

//add new listing form
router.get("/new", isLoggedIn, (req, res) => {
  console.log(req.user);

  res.render("listings/newListing.ejs");
});

//show specific listings in detail
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/showlisting.ejs", { listing });
  }),
);

//create new route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  }),
);

//edit form route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("listings/editlistings.ejs", { listing });
  }),
);

//update listing route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;

    await Listing.findByIdAndUpdate(id, req.body.listing, {
      runValidators: true,
    });
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
  }),
);

//destroy route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndDelete(id);
    console.log(listing);
    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
  }),
);

module.exports = router;
