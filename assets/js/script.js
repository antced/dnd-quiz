// GIVEN I am taking a code quiz
// WHEN I click the start button
document.getElementById("startBtn").addEventListener("click",createButton);
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

function createButton() {
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    
    var buttonDiv = document.getElementById("buttonDiv");
    var buttonArr = buttonDiv.getElementsByTagName("button");
    console.log(buttonArr[0]);
    
}