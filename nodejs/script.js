//destructure
// let {PI,sub}=require("./math.js");
//using object
// let{sum,mul}=require("./math.js");
// let math=require("./math.js");

//using destructure object values directly
// console.log(pi.sum(2,3))
// console.log(sub(8,3))
// console.log(pi.mul(8,3))
// console.log(math)

//using math
// console.log(math.PI)



//using exports only in mathh.js file
// console.log(sum(9,7))
// console.log(mul(9,7))

//******************** */
//importing directory or folder
// let info=require("./fruits");
// console.log(info)
// console.log(info[0].name)
// console.log(info[1].name)
// console.log(info[2].name)

//*********************** */
//using figlet package locally installed

const figlet = require('figlet');

figlet("sherooo!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});