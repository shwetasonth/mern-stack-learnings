const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../Models/review.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/listing.js");
const { validateReview, isLoggedIn,isReviewAuthor } = require("../middleware.js");

//Review route
//Post

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    // console.log(listing);
    let newReview = new Review(req.body.review);
    // console.log(review, req.body);

    listing.reviews.push(newReview);
    newReview.author = req.user._id;
    await newReview.save();
    let result = await listing.save();
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
  }),
);

//destroy review

router.delete(
  "/:reviewId",
    isLoggedIn,isReviewAuthor,
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    let a = await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
  }),
);

module.exports = router;
