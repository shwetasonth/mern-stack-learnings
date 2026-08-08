let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
let file=document.querySelector("#file");
console.log(file.value);
console.log(file.name);

let img=document.createElement("img");
img.setAttribute("src","file.value")
let imgdiv=document.querySelector("#imgdiv");
imgdiv.appendChild(img)
console.log(imgdiv)
})

