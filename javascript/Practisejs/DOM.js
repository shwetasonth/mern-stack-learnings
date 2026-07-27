// let btn=document.querySelector('button');
// btn.onclick=function(){
//   alert("button was clicked")
// }

let p = document.querySelector("p");
p.style.color = "red";
p.style.backgroundColor = "yellow";

function sayHello() {
  alert("hello");
  // console.log("like me on mouseenter")
}
function sayName() {
  alert("i am event listener")
  // console.log("i am eventlistener");
}

let btns = document.querySelectorAll("button");
for (let btn of btns) {
  // btn.onclick=sayHello;
  // btn.onmouseenter=sayHello;

  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
}
