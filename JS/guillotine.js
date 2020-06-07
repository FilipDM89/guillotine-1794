//Document Selectors - Image, letters & Secret Word display 
const secretWord = document.getElementById("secretword");
const guilloTine = document.getElementById("guillotine");
const alphabet   = document.getElementById("alphabet");
const restart = document.getElementById("restart")
const button = document.getElementById("button")
const letters = document.querySelectorAll('.letter');
const turns = document.getElementById("turns");


//Array of words

var wordList = [
  "liberty",
  "equality",
  "fraternity",
  "freedom",
  "revolutionary",
  "musket",
  "napoleonic",
  "gunpowder",
  "grenadier",
  "carbine",
  "pitchfork",
  "cavalry",
  "glorious",
  "patriotism",
  "enlightenment",
  "imperialism",
  "freethinker",
  "conquest", 
  "bayonet",
  "artillery",
  "rationality",
  "secular",
  "splendour",
  "tricolore",
  "cockade",
  "victory",
  "cuirassier",
  "republic"
];


//Picks a random word from the array above

function wordSelector() {
  var selectWord = wordList[Math.floor(Math.random() * wordList.length)];
  return selectWord;
};

var selectedWord = wordSelector();


//Ability to click letters and includes a checking letters function

var clickedLetter = "";

letters.forEach(function (letter) {
  letter.addEventListener('click', function (e) {
    console.log(this.textContent.toLowerCase());
    clickedLetter = this.textContent.toLowerCase();
    checkLetters();
    letter.textContent = " ";
  });
});



//Function that makes an array of each letter of the secret word and replaces them with dashes

var wordLetters = function () {
  for (var i = 0; i < selectedWord.length; i++) {
    lettersOfWord[i] = "_";
  };
  return lettersOfWord
};

var lettersOfWord = [];
var remainingLetters = selectedWord.length;
var runWordLetters = wordLetters();
secretWord.innerHTML = lettersOfWord.join(" ");


//function to make a control word

var controlWord = function(){
  for( var i = 0; i < selectedWord.length; i++){
  checkWord.push(selectedWord.charAt(i));
  };
  return checkWord;
};

var checkWord = [];
var runControlWord = controlWord();


//Checks the clicked letter with the letters in the array

var checkLetters = function () {
  var goodGuess = false;
  for (var j = 0; j < selectedWord.length; j++) {
    if (selectedWord[j] === clickedLetter) {
      goodGuess = true;
      lettersOfWord[j] = clickedLetter;
      remainingLetters--;
      secretWord.innerHTML = lettersOfWord.join(" "); 
      wordIsCorrect(lettersOfWord, checkWord);  
    }
  }
  if (goodGuess == false){
    wrongImages();
    endGame();
  }
};


//function to loop through the images if the selected letter was wrong
var attempts = 2;

function wrongImages(){
  if(attempts !== 11){
    guilloTine.src = "assets/images/guillotine_" + attempts + ".jpg";
    attempts++;
    var guessesLeft = numberOfGuesses();
    turns.innerHTML = "Turns: " + guessesLeft + " | 9";
    console.log(attempts)
  }
  return guessesLeft;
};

 

//loop to check the guesses left
function numberOfGuesses() {
  for(var k = 0; k < attempts; k++){
    function turnsLeft (attempts){
      var attemptsLeft = attempts - 2;
      return attemptsLeft
    }
  }
  return turnsLeft(attempts);
}





//function that shows the player if he has guessed the word correctly

var gameWon = false;
var checkGameStatus = new Boolean(gameWon);

function wordIsCorrect(string1, string2){
  let intoString1 = string1.join("");
  let intoString2 = string2.join("");
  if(intoString1 == intoString2){
    secretWord.style.color = "green";
    gameWon = true;
  }
  endGame();
  return gameWon;
};


//function that makes the game quit and asks the player to restart the game

function endGame(){
  if(gameWon == true){
    button.setAttribute("style", "display: block;");
    alphabet.setAttribute("style", "display: none;");
  } else {
    if(attempts == 11){
      button.setAttribute("style", "display: block;");
      alphabet.setAttribute("style", "display: none;");
      secretWord.innerHTML = selectedWord;
      secretWord.style.color = "red";
    }
  };
};

//Function to restart the game

function restartGame(){
  restart.addEventListener("click", function(){ 
    location.reload();
  });
};

var runRestart = restartGame();


//https://codepen.io/gregorib/pen/BaaLdmj?editors=1111