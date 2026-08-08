// ESM
// import { faker } from "@faker-js/faker";
const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const methodOverride = require("method-override");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;

//middleware
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

//set views folder
app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "college",
  password: "dbms.7777",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Route=>show no of users
app.get("/", (req, res) => {
  try {
    let q = `select count(*) from user`;
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];

      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Error in db");
  }
});

//Route=>show all users

app.get("/users", (req, res) => {
  try {
    let q = `SELECT * FROM USER`;
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
  }
});

//Route=>edit form=>get user input in form
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  try {
    let q = `select * from user where id='${id}'`;
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("editform.ejs", { user });
    });
  } catch (err) {
    console.log(err);
  }
});

//Route=>actual update in db
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  console.log(req.body);
  let { USERNAME: newUser, PASSWORD: formPassword } = req.body;
  try {
    let q = `SELECT * FROM USER where id='${id}'`;
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPassword != user.PASSWORD) {
        res.send("Wrong password");
      }
      else{
        try{
        let q2=`update user set username='${newUser}' where id='${id}'`;
          connection.query(q2,(err,result)=>{
            if(err) throw err;
            console.log(result)
            res.redirect("/users")
          })}catch(err){
            console.log(err)
          }
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//server started listening
app.listen(port, () => {
  console.log(`App started at ${port}`);
});

// let users = [];

// for (let i = 0; i < 100; i++) {
//   users.push(getRandomUser());
// }
// let q = "insert into user  values ?";
// let q = "select * from user";

// connection.end();

// console.log(getRandomUser());
