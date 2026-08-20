const express = require("express");

const app = express();

//middlewares

//for all th request middleware will send response it will not go ang get request
app.use((req, res, next) => {
  let { name } = req.query;
  // console.log(name);
  console.log("hello i am middleware no 1");
  return next(); //comment once next and check
  console.log("i am middelwaer 1 executed after next()");//if retrun next() wrttn this line is not executed
});

//manipulating request object
//Loggers - morgan
app.use((req, res, next) => {
  req.time=new Date(Date.now());
 console.log(req.method,req.path,req.hostname, req.time.toString())
//  console.log("i am middleware no 2")
 return next(); //comment once next and check
});


//spesific path middleware
app.get("/random",(req,res,next)=>{
 res.send("i am '/random' path middleware");
 next()
})

app.use((req,res,next)=>{

res.send("page not found")
  return next();
})

app.get("/", (req,res) => {
res.send("root page")
});

app.get("/random", (req,res) => {
res.send("hi i am random page")
});


app.listen(5000, () => {
  console.log(`App running at port number https://localhost:5000`);
});
