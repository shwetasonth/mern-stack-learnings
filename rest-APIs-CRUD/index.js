const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

let posts = [
  { id: uuidv4(), username: "shweta", comment: "I love coding" },
  { id: uuidv4(), username: "revan", comment: "I like travelling" },
  { id: uuidv4(), username: "janvi", comment: "I am foody" },
];
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//serving static files
app.use(express.static(path.join(__dirname, "public")));

//setting path view folder

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//creating request i.e REST APIs

//1)index route --> view all posts
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

//2)create post route
app.get("/posts/new", (req, res) => {
  res.render("newpost.ejs");
});

app.post("/posts", (req, res) => {
  let { username, comment } = req.body;
  let id = uuidv4();
  posts.unshift({ id, username, comment });
  res.redirect("/posts"); //redirecting to home page
});

//3)show in detail route
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  console.log(post);

  res.render("show.ejs", { post });
});

//4)update route
//edit form for updating post

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  console.log(post, id);
  res.render("editform.ejs", { post });
});

//update post
app.patch("/posts/edit/:id", (req, res) => {
  let { comment } = req.body;
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  post.comment = comment;

  res.redirect("/posts");
});

//delete post route

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => post.id != id);
  // res.send(`${id}deleted successfully`);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server running at port no ${port}`);
});
