var quiz = [{
    question: "This is a test question",
    answers: {
        1: "wrong",
        2: "wrong",
        3: "right",
        4: "wrong"
    },
    rightAnswer: "right",
}, {
    question: "This is another test question",
    answers: {
        1: "right",
        2: "wrong",
        3: "wrong",
        4: "wrong"
    },
    rightAnswer: "right",
}
]

var questionNumber = 0

// GIVEN I am taking a code quiz
// WHEN I click the start button
document.getElementById("startBtn").addEventListener("click", makeQuiz);
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

function makeQuiz() {

    var startBtn = document.getElementById("startBtn");
    startBtn.remove();

// rename the h1 to question name
    var question = document.getElementById("questionText");
    question.textContent = quiz[questionNumber].question;

// create 4 buttons
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);

// maybe replace with get all?
    var buttonDiv = document.getElementById("buttonDiv");
    var buttonArr = buttonDiv.getElementsByTagName("button");

    // apply the answer options to the button text
    buttonArr[questionNumber].textContent = "blank"
    buttonArr[questionNumber + 1].textContent = "gfdfgh"
    buttonArr[questionNumber + 2].textContent = "gfdfgh"
    buttonArr[questionNumber + 3].textContent = "gfdfgh"

    questionNumber++
}