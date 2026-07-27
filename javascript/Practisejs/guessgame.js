let max = prompt("enter the maximum  number");
let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");
guess = parseInt(guess);
console.log(random);

while (true) {
  if (guess == "quit") {
    alert("you quit game ");
    break;
  }

  if (guess == random) {
    console.log(random, guess, typeof random, typeof guess);

    alert(`Congrates!!!! you guess it right.Random numbe is  ",${random}`);
    break;
  } else if (guess < random) {
    guess = prompt("Hint: your number was too small.please try agin ");
  } else if (guess > random){
    guess = prompt("Hint:your number was too large.please try agin ");
  }else {
    guess = prompt(
      "your guess was wrong ,please Guess the number or press Quit to quit the game",
    );
  }
}
