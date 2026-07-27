let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
//step -1 pressing any button game starts
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

//step-2 flash any color and level up
function levelup() {
  userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIdx];
  let randombtn = document.querySelector(`.${randomColor}`);
  // console.log(randomIdx);
  // console.log(randomColor);
  // console.log(randombtn);

  gameSeq.push(randomColor);
  console.log(gameSeq);

  //flash random color
  flash(randombtn);
}

function checkAns(idx) {

  if (userSeq[idx] === gameSeq[idx]) {
if(userSeq.length==gameSeq.length){
  setTimeout(levelup(),1000);
}

  } else {
    h2.innerText = `Game Over! Press any key to start.`;
  }
}

//track which button pressed

function btnpress() {
  let btn = this;
  userflash(btn);
  // console.log(this)
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
  btn.addEventListener("click", btnpress);
}
