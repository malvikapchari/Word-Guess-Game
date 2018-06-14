
var $letterGuessed = document.getElementById("letterGuessed");
var $wins = document.getElementById("wins");
var $loss = document.getElementById ("loss");
var $guesses = document.getElementById ("guesses");
var $newGame = document.getElementById("newGame");
var $placeholder = document.getElementById("placeholder");
var $NewGameButton = document.getElementById("newGame");
var $incorrectLetters = document.getElementById("incorrect");

//array list of presidents
var presidents = ["washington", "adams", "jefferson", "madison", "monroe",
"adams", "jackson", "harrison", "tyler", "polk", "taylor", "fillmore", "pierce",
"buchanan", "lincoln", "johnson", "grant", "hayes", "garfield", "arthur",
"cleveland", "mcKinley", "roosevelt", "taft", "wilson", "harding", "coolidge",
"hoover", "truman", "eisenhower", "kennedy", "johnson", "nixon", "ford", "carter",
"reagan", "bush", "clinton", "Obama", "Trump"]

//js variables
var letters = [];
var wins = 0;
var loss = 0;
var guesses = 8;
var placeholder= [];
var gameRunning = false;
var chosenWord;
var incorrect= [];
//when button clicked game will start

function newGame () {
letters = [];
guesses = 8;
placeholder= [];
gameRunning = true;
incorrect =[];
console.log (gameRunning);
//choosing new word
chosenWord = presidents[Math.floor(Math.random()*presidents.length)];
console.log(chosenWord);
//create placeholders
for (var i=0; i<chosenWord.length; i++) {

placeholder.push("_");


}

//make everything show onto the screen

    $letterGuessed.textContent= letters;
    $wins.textContent = wins;
    $loss.textContent = loss;
    $guesses.textContent = guesses;
    $placeholder.textContent = placeholder.join(" ");
    $incorrectLetters.textContent = incorrect;
} //end of newgame

function theLettersGuessed(letter) {

console.log (letters);
    console.log("The letter chosen by user is: " + letter);
    console.log (gameRunning);
    console.log (letters.indexOf(letter));
if (gameRunning && letters.indexOf(letter) === -1) {
//execute lettersGuessed
    letters.push(letter);
    

    for(var i= 0; i<chosenWord.length; i++) {

        if (chosenWord[i] === letter.toLowerCase()) {
        placeholder[i] = chosenWord[i]; //see if have to change to = chosenWord[i]

            }

    }

}

else {
        if (!gameRunning) {

        // alert ("Start a new game by pressing new game!");
        }
        else {
        alert ("Use another letter, you used this already!")
        }
    }

   $letterGuessed.textContent = letters;
   $placeholder.textContent = placeholder.join(" ");

} //end of lettersGuessed function
// letters guessed bank

function wrongLetters(letter) {

    if ( placeholder.indexOf(letter) === -1){
        guesses --;
    if (guesses < 1){
        
        alert("Game Over press new Game");
        loss ++;
    }
    incorrect.push(letter);
    $incorrectLetters.textContent = incorrect;
    $guesses.textContent = guesses;
    $loss.textContent = loss;

    }

} //end of wrongLetters

$NewGameButton.addEventListener('click', newGame);


document.onkeypress = function(event) {

    theLettersGuessed(event.key);

    wrongLetters(event.key);
}

