const express = require("express");
const path = require("path");
const app = express();

let port = 8080;


//serving static files using middlewares
app.use(express.static( path.join(__dirname, "/public/js")))
app.use(express.static( path.join(__dirname, "/public/css")))

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//creating different routes 
app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact", (req, res) => {
  // res.render("contact.ejs",{diceval:num});
  res.render("contact.ejs");
});

app.get("/", (req, res) => {
  res.send("This is root directory ");
});

app.get("/rolldice", (req, res) => {
  let diceval = Math.floor(Math.random() * 6) + 1;
  res.render("roll.ejs", { diceval });
});


//dynamic route creation using path parameters
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  // let followers = ["janvi", "revan", "shweta", "jagdish"];
  // res.render("instagram.ejs", { username, followers });

  //************************* */

  //instagra, page for animals
  let data = require("./data.json");
  let user = data[username];
  if (user) {
    res.render("instagram.ejs", { user });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`App running at port no ${port}`);
});
