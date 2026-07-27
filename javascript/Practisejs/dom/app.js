//see output in console of browser since document object is availbale only in browser

//gwtElementById
// let imgobj=document.getElementById("mainImg");
// console.dir(imgobj);

//getElementsByClassName

// let smallImages=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//   smallImages[i].src="assets/spiderman_img.png";
// }

//getElementsByTagName

// let p=document.getElementsByTagName('p');
// console.dir(p);
// p[1].innerText="hellllllloooo everyone!!!!! i am shweta ,changed text of tgis paragraph"
// console.dir(p[1]);

//query selector
// console.dir(document.querySelector('h1'))
// console.dir(document.querySelector("#description"))
// console.dir(document.querySelector("p"))//selects firt para
// console.dir(document.querySelectorAll("p"))//selects all para
// console.dir(document.querySelectorAll(".oldImg"))//selects all image classes returning nodelist
// console.dir(document.querySelector("div a"))//selects first anchor tag with class boxlink
// console.dir(document.querySelectorAll("div a"))//selects All anchor tag with class boxlink

//setting contents in objects
// console.dir(document.getElementsByTagName('p')[0]);
// console.dir(document.getElementsByTagName('p')[0].innerText);//showa text displayed on web page .hidden text/content is not shown
// console.dir(document.getElementsByTagName('p')[0].textContent);//showa text from the html file .hiidden text/content is shown
// console.dir(document.getElementsByTagName('p')[0].innerHTML.textContent);//showa text from the text along with the tags used in with text

// let r=document.getElementsByTagName('p')[0];
// r.innerText="changing the text by innertext"
// r.innerHTML="<h1>changing the text by <b >innertext</b></h1>"

//manipulatin attributes
// let img = document.querySelector("img");
// console.dir(img.getAttribute("id")); //before changing id attribute value
// img.setAttribute("id", "spiderimg");
// console.dir(img.getAttribute("id")); //after changing id attribute value
// img.setAttribute("src", "assets/creation_3.jpeg");

//manipulatin style

// let heading= document.querySelector("h1");
// heading.style.color='teal'
// heading.style.border='2px dashed red'
// heading.style.boxShadow='2px 2px 2px  red'
// console.dir(heading.style);

// let links=document.querySelectorAll(".box a");//we can use loops only for  list of tags nodelist or htmlcollection
// for(let i=0;i<links.length;i++){
//   links[i].style.color="purple"
// }

//classList specify how many classes are their for an tag/object

// let heading = document.querySelector("h1");
// console.dir(heading);
// console.dir(heading.classList);
// heading.classList.add("underlinestyle");//adds class
// heading.classList.add("green");
// heading.classList.remove("green");
// console.dir(heading.classList);

// toggle method to add or remove classes from classList

// heading.classList.toggle("underlinestyle");
// heading.classList.toggle("green");
// let box= document.querySelector(".box");
// box.classList.toggle("yellowBg")

//****************** */

/* Navigation
 *parentElement
 *children
 */

// let h4=document.querySelector("h4");
// console.dir(h4.parentElement);//selects parent element
// let box=document.querySelector(".box");
// console.dir(box.children);//selects children element HTMLCollection

// console.dir(box.childElementCount);//how many no of children for an element

//previousElementSibling & nextElementSibling
// let ul=document.querySelectorAll("ul");
// console.dir(ul[0].children);
// console.dir(ul[0].parentElement);
// console.dir(ul[0].children[1].previousElementSibling.innerText);
// console.dir(ul[0].children[1].nextElementSibling.innerText);

//appendchild
let p = document.createElement("p");
p.innerHTML = "<b>i am appended by appendchild method</b>";
let box = document.querySelector(".box");
box.appendChild(p); //appends at the end as a child element
let button = document.createElement("button");
button.innerHTML="<b>Click-Me</b>"
box.appendChild(button);

//append =>makes changes in the existing element
p.append("this is new text using append method")//appends text to the existing paragraph element

p.append(button)//adds button to the existing paragraph element


//prepend =>adds element to the first/starting position
box.prepend(p);

//insertAdjacent(where/position,element)
let btn1=document.createElement('button');
btn1.innerText="submit";
p=document.querySelector('p');
console.dir(p)
console.dir(btn1)
 p.insertAdjacentElement('beforebegin',btn1)
 p.insertAdjacentElement('afterbegin',btn1)
 p.insertAdjacentElement('beforeend',btn1)
 p.insertAdjacentElement('afterend',btn1)

//removeChild=>removes child element
let body=document.querySelector('body');
body.children;
console.dir(body.children)
console.dir(btn1.parentElement)

// let body=document.querySelector('body');
// console.dir(body.children)
// console.dir(btn1.parentElement)
// body.removeChild(btn1)


//remove=>whole element from page
// btn1.remove();
// p.remove();
// body.remove()