const express=require("express");
const app=express();

let port=3000;

app.use(express.urlencoded({extended:true}));//parse form data
app.use(express.json());//parse json data

app.get("/register",(req,res)=>{
  let {username,pwd}=req.query;
res.send(`<h1>Standard GET request response.  Welcome ${username}</h1>`);

});

app.post("/register",(req,res)=>{
  let {username,pwd}=req.body;
  console.log(req.body);
res.send(`welcome ${username} and your password is ${pwd}`)
});


app.listen(port,()=>{
  console.log(`App started at port no ${port}`)
})