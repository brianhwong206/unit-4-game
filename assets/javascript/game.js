
$( document ).ready(function() { // mandatory jquery line to check if document is ready 
    console.log( "ready!" ); // console print a ready message.

// variables

var maximum = 40; // ceiling 
var minimum = 20; // floor
var randomTargetNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // target value randomized between max and min
var totalScore = 0; // initial total score is set to 0
var wins = 0;
var losses = 0;
var counter = 0;
var array = [] // array to hold the randomly selected values from 1-7

//functons

function winScenario(){
    wins++;
    counter++;
    $("#wins").html("Wins: " + wins); // displays the win count
    reset();
}

function loseScenario(){
    losses++;
    counter++;
    $("#losses").html("Losses: " + losses); // displays the losses count
    reset();
}

function reset(){
    randomTargetNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // reset the randomTargetNumber
    totalScore = 0; //reset the total score to 0
    array = [];
    $("#targetAnswer").html("Target number: " + randomTargetNumber); // displays new randomTarget Number
    $("#totalScore").html("Your Total Score: " + totalScore); // displays new total score as 0
    $("#photos").empty();
    console.log("New Target number: " + randomTargetNumber);
}

function setArray(){
while(array.length < 4){ //continue to populate the array if its length is < 4.
    var randomNumber = Math.floor(Math.random()*7) + 1; // random number generated
    if(array.indexOf(randomNumber) > -1) continue; // check to see if random number is present within array
    array[array.length] = randomNumber; // assign array index to the new random number
    $("#array").html("Array: " + array.join(" ")); // displays the computer selected array
    
}
console.log(array.join(" "));
}

function setImageValues(){
for (var i = 0; i < array.length; i++) {
    var image = $("<img>"); // new variable is created for the iteration
    image.addClass("crystal-image"); // class is added to the new variable
    image.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"); // image link attribute is added to the variable
    image.attr("data-value", array[i]); // data value attribute is added to the variable
    $("#photos").append(image); // variable is then appended to the div in the HTML in form of photo
}
}

$("#targetAnswer").html("Target number: " + randomTargetNumber); // displays the new target answer and replaces the current value on HTML.
setArray();
setImageValues();

$(".crystal-image").on("click", function() { // when image is clicked perform this following function
    var value = ($(this).attr("data-value")); //declaration of variable "value" when "this" image is clicked, get the data-value attribute and store it in the newly created variable "value".
    value = parseInt(value); // parseInt value to ensure it is in numerical form
    totalScore += value; // add the selected value to the current total score and update the total score
    
    $("#totalScore").html("Your Total Score: " + totalScore);
    
    //alert("New score: " + totalScore); // message alert to inform user of their new score

    if (totalScore == randomTargetNumber ) { // win scenario
        alert("You win!");
        console.log("win");
        winScenario();
    }
    else if (totalScore >= randomTargetNumber) { // lose scenario
        alert("You lose!!");
        console.log("lose");
        loseScenario();
    }
    else if ((totalScore >= (randomTargetNumber * .80)) && (totalScore <= randomTargetNumber)) {
        alert("Almost there!");
    }
})

});
  