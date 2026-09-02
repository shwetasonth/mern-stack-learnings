const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {  reviewSchema } = require("../schema.js");

const Review =  require("../Models/review.js");
const Listing = require("../Models/listing.js");

//validation function for server side for review
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Review route
//Post

router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    // console.log(listing);
    let review = new Review(req.body.review);
    // console.log(review, req.body);
    listing.reviews.push(review);

    await review.save();
    let result = await listing.save();
      req.flash("success","New Review Created!");
    res.redirect(`/listings/${listing._id}`)
  }),
);

//destroy review

router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    let a = await Review.findByIdAndDelete(reviewId);
     req.flash("success","Review deleted!")
    res.redirect(`/listings/${id}`);
  }),
);

module.exports = router;
