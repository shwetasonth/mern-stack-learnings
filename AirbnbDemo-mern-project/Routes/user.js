const express = require("express");
const router = express.Router();
const User = require("../Models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");

//signup form to get user information
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

//registering user on signup
router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      let newUser = new User({
        email,
        username,
      });
      let registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome to DemoAirbnb");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }),
);

//login form
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

//login post
router.post(
  "/login",
  savedRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back to de moAirbnb! You are logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(res.locals.redirectUrl);
  },
);

//logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;
