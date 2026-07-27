const favMovie="avatar";
let guess=prompt("guess my movie");

while((guess!=favMovie)&&(guess!='quit'&& guess!='Quit')){
  guess=prompt("Wrong guess, try again or type 'quit' to exit");
}

if(guess==favMovie){
console.log("You guessed it right");
}else{
  alert("You quit the game");
  // console.log("You quit the game");
}