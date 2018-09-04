$( document ).ready(function() { // mandatory jquery line to check if document is ready 
    console.log( "ready!" ); // console print a ready message.

// variables

var maximum = 30; // ceiling 
var minimum = 15; // floor
var randomTargetNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // target value randomized between max and min
var totalScore = 0; // initial total score is set to 0
var wins = 0;
var losses = 0;
var counter = 0;
var array = [] // array to hold the randomly selected values from 1-7

//functions

function winScenario(){
    wins++;
    counter++;
    $("#wins").html("Wins: " + wins); // displays the win count
    console.log("Games Played: " + counter);
}

function loseScenario(){
    losses++;
    counter++;
    $("#losses").html("Losses: " + losses); // displays the losses count
    console.log("Games Played: " + counter);
}

function reset(){
    randomTargetNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // reset the randomTargetNumber
    totalScore = 0; //reset the total score to 0
    array.splice(0,array.length); // empties out the array.
    resetArray();
    resetImages();
    $("#targetAnswer").html("Target number: " + randomTargetNumber); // displays new randomTarget Number
    $("#totalScore").html("Your Total Score: " + totalScore); // displays new total score as 0
    console.log("Target Value: " + randomTargetNumber);
}

function setArray(){
    while(array.length < 4){ //continue to populate the array if its length is < 4.
        var randomNumber = Math.floor(Math.random()*7) + 1; // random number generated
        if(array.indexOf(randomNumber) > -1) continue; // check to see if random number is present within array
        array[array.length] = randomNumber; // assign array index to the new random number
        $("#array").html("Array: " + array.join(" ")); // displays the computer selected array
    }
    console.log("Array Values: " + array.join(" "));
}

function setImageValues(){
    for (var i = 0; i < array.length; i++) {
        var image = $("<img>"); // new variable is created for the iteration
        image.addClass("crystal-image"); // class is added to the new variable
        image.attr("src", "assets/images/hellokittybun2.jpg"); // image link attribute is added to the variable
        image.attr("value", array[i]); // data value attribute is added to the variable
        image.attr("id", "crystal-image" + i); // data id attribute is added to the variable
        $("#photos").append(image); // variable is then appended to the div in the HTML in form of photo
    }
}

function resetArray(){
    while(array.length < 4){ //continue to populate the array if its length is < 4.
        var randomNumber = Math.floor(Math.random()*7) + 1; // random number generated
        if(array.indexOf(randomNumber) > -1) continue; // check to see if random number is present within array
        array[array.length] = randomNumber; // assign array index to the new random number
        $("#array").html("Array: " + array.join(" ")); // displays the computer selected array
    }
    console.log("Array Values: " + array.join(" "));
}

function resetImages(){
    for (var i = 0; i < array.length; i++) {
        ($("#crystal-image" +i).attr("value", array[i]));
    }
}

//initial round

if (counter == 0){
$("#targetAnswer").html("Cash on Hand: " + randomTargetNumber); // displays the new target answer and replaces the current value on HTML.
console.log("Target Value: " + randomTargetNumber);
setArray();
setImageValues();
}

//click action

$(".crystal-image").on("click", function() { // targetting crystal image class, when image is clicked perform the following function
    var tempValue = ($(this).attr("value")); //declaration of variable "value" when "this" image is clicked, get the data-value attribute and store it in the newly created variable "value".
    tempValue = parseInt(tempValue); // parseInt value to ensure it is in numerical form
    totalScore += tempValue; // add the selected value to the current total score and update the total score    
    $("#totalScore").html("Your Current Bill: " + totalScore);
    console.log(tempValue);

    switch(true) {
        case (randomTargetNumber === totalScore):
            alert("You are now full and bill is paid!");
            console.log("Game result: Win");
            winScenario();
            reset();
            break;
        case (randomTargetNumber < totalScore):
            alert("You overspent!");
            console.log("Game result: Lose");
            loseScenario();
            reset();
            break;
        default:
    }

})

});
  