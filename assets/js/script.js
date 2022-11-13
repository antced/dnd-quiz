var quiz = [{
    question: "This is a test question",
    answers: {
        one: "wrong",
        two: "wrong",
        three: "right",
        four: "wrong"
    },
    rightAnswer: "right",
}, {
    question: "This is another test question",
    answers: {
        one: "right",
        two: "wrong",
        three: "wrong",
        four: "wrong"
    },
    rightAnswer: "right",
}, {
    question: "This is another test question",
    answers: {
        one: "right",
        two: "wrong",
        three: "wrong",
        four: "wrong"
    },
    rightAnswer: "right",
}, {
    question: "This is another test question",
    answers: {
        one: "right",
        two: "wrong",
        three: "wrong",
        four: "wrong"
    },
    rightAnswer: "right",
}, {
    question: "This is another test question",
    answers: {
        one: "right",
        two: "wrong",
        three: "wrong",
        four: "wrong"
    },
    rightAnswer: "right",
}
]

// maybe replace with get all?
var buttonDiv = document.getElementById("buttonDiv");
var buttonArr = buttonDiv.getElementsByTagName("button");

var questionNumber = 0

// GIVEN I am taking a code quiz
// WHEN I click the start button
document.getElementById("startBtn").addEventListener("click", setQuiz);
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

function setQuiz() {
    // remove start button
    var startBtn = document.getElementById("startBtn");
    startBtn.remove();

    // remove paragraph text
    var directions = document.getElementById("directions");
    directions.remove();

    // create 4 buttons
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);

    // assign ids to all buttons
    buttonArr[0].setAttribute("id", "button-1")
    buttonArr[1].setAttribute("id", "button-2")
    buttonArr[2].setAttribute("id", "button-3")
    buttonArr[3].setAttribute("id", "button-4")
    // go to actual quiz part and don't return here
    takeQuiz();
}

function takeQuiz() {

    if (questionNumber < quiz.length) {
        // rename the h1 to question name
        var question = document.getElementById("questionText");
        question.textContent = quiz[questionNumber].question;

        // apply the answer options to the button text
        buttonArr[0].textContent = quiz[questionNumber].answers.one;
        buttonArr[1].textContent = quiz[questionNumber].answers.two;
        buttonArr[2].textContent = quiz[questionNumber].answers.three;
        buttonArr[3].textContent = quiz[questionNumber].answers.four;

        buttonArr[0].addEventListener("click", checkAnswer)
        buttonArr[1].addEventListener("click", checkAnswer)
        buttonArr[2].addEventListener("click", checkAnswer)
        buttonArr[3].addEventListener("click", checkAnswer)
    } else {
        console.log("gameover");
    }

}

function checkAnswer(clicked_id) {
    var clickedBtn = document.getElementById(clicked_id.target.id);
    if (clickedBtn.textContent === "right") {
        console.log("correct");
        questionNumber++;
        takeQuiz();
    } else {
        console.log("incorrect");
        questionNumber++;
        takeQuiz();
    }
}