// create a middle-ware for an api that checks if the access token was passed in the uery string or not.

const express = require("express");
const Customerror = require("./customerr.js");
const app = express();

const checkToken=(req, res,next) => {
  let { token } = req.query;
  if (token === "give-access") {
    next();
  } else {

    //custom error 
    throw new Customerror(401,"this is ACCESS DENIED");
  }
}

//passing multiple middlewares

app.get("/",(req,res)=>{
  res.send("hi i am root");
})
app.get("/api",checkToken,(req,res)=>{
  res.send("Data");
})

//handled custom error
app.use((err,req,res,next)=>{
  let {status=500,message="some error occured"}=err;
  console.log("-----errorrrr----");
res.status(status).send(message)
// next(err);
})

app.listen(5000, () => {
  console.log(`App running at port number https://localhost:5000`);
});
