const express = require("express");
const app = express();


app.get("/", (req,res) => {
res.send("root page")
});

app.get("/random", (req,res) => {
res.send("hi i am random page")
});

app.get("/wrong", (req,res) => {
abcd=abcd
});



app.use((err,req,res,next)=>{
  console.log("-----errorrrr----");

next(err);
})
app.listen(8000, () => {
  console.log(`App running at port number https://localhost:8000`);
});