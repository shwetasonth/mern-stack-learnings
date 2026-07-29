const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is running at port number ${port}`);
});

//based on request different response or routing
app.get("/", (req, res) => {
  res.send("This is a home page");
});
app.get("/about", (req, res) => {
  res.send("This is a about page");
});
app.get("/contact", (req, res) => {
  res.send("This is a contact page");
});
app.post("/", (req, res) => {
  res.send("you sent a post request");
});

//************************** */

//path parameter of get request

// app.get("/userpage/:username/:id",(req,res)=>{
//   let {username,id}=req.params;
//   res.send(`<h1>Welcome to the  page ${username}`)
// })

//************************* */
//Query parameter

app.get("/search", (req, res) => {
  let { q } = req.query;
  console.log(req.query);
  if (!q) {
    res.send(`<h1>You searched nothing<h1>`);
  } else res.send(`You searched for query : ${q}`);
});

//this route accepts all routes
// app.use((req, res) => {
//   console.log("request received");
//   // res.send("plain text as response");
//   // res.send({
//   //   name: "shweta",
//   //   marks: 99,
//   // });
//   res.send('<h1>Fruits</h1><ul><li>apple</li><li>banana</li></ul>');
// });
