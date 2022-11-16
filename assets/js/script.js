var quiz = [{
    question: "What does AC stand for?",
    answers: {
        one: "1. Actual Class",
        two: "2. Arcane Club",
        three: "3. Armor Class",
        four: "4. Amount of Coins"
    },
    rightAnswer: "3. Armor Class",
}, {
    question: "What number is rolled for a critical hit?",
    answers: {
        one: "1. 100",
        two: "2. 20",
        three: "3. 50",
        four: "4. 999"
    },
    rightAnswer: "2. 20",
}, {
    question: "Who invented Dungeons and Dragons?",
    answers: {
        one: "1. Gary Gygax",
        two: "2. Bob Barker",
        three: "3. Peter Mayhew",
        four: "4. Steve Jobs"
    },
    rightAnswer: "1. Gary Gygax",
}, {
    question: "What ability determines your perception?",
    answers: {
        one: "1. Intelligence",
        two: "2. Charisma",
        three: "3. Wisdom",
        four: "4. Strength"
    },
    rightAnswer: "3. Wisdom",
}, {
    question: "What level introduces subclasses?",
    answers: {
        one: "1. 10",
        two: "2. 99",
        three: "3. 4",
        four: "4. 3"
    },
    rightAnswer: "4. 3",
}
];
// initial local storage array
var scoreArr = [];
// setting elements up globally
var buttonDiv = document.getElementById("buttonDiv");
var buttonArr = buttonDiv.getElementsByTagName("button");
var question = document.getElementById("questionText");
var result = document.createElement("p");
var scoreBox = document.getElementById("highscoreBox");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
// counters
var questionNumber = 0;
var time = 60;

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
// TODO SAVE HIGH SCORE IN LOCAL STORAGE

function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {

        time--;
        document.getElementById("timer").textContent = "Timer: " + time;
        takeQuiz();
        if (time <= 0) {
            time = 0;
            document.getElementById("timer").textContent = "Timer: " + time;
            clearInterval(timerInterval);
            gameOver();
        } else if (time <= 0 || questionNumber === 5) {
            // time = 0;
            document.getElementById("timer").textContent = "Timer: " + time;
            clearInterval(timerInterval);
            inputScore();
        }

    }, 1000);
}


function setQuiz() {
    // localStorage.getItem(JSON.parse("scores"))
    // remove title
    document.getElementById("title").remove();
    // remove start button
    document.getElementById("startBtn").remove();
    // remove paragraph text
    document.getElementById("directions").remove();
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
    setTimer();
}

function takeQuiz() {
    if (questionNumber < quiz.length) {
        // rename the h1 to question name
        question.textContent = quiz[questionNumber].question;

        // apply the answer options to the button text
        buttonArr[0].textContent = quiz[questionNumber].answers.one;
        buttonArr[1].textContent = quiz[questionNumber].answers.two;
        buttonArr[2].textContent = quiz[questionNumber].answers.three;
        buttonArr[3].textContent = quiz[questionNumber].answers.four;
        // allow each button to listen for a click, and then check if it's correct
        buttonArr[0].addEventListener("click", checkAnswer)
        buttonArr[1].addEventListener("click", checkAnswer)
        buttonArr[2].addEventListener("click", checkAnswer)
        buttonArr[3].addEventListener("click", checkAnswer)
    }
}

function checkAnswer(event) {
    // remove previous correct/incorrect paragraph
    var results = document.getElementsByTagName("p");
    results[0].remove();
    // checking if clicked button is correct or not
    var clickedBtn = document.getElementById(event.target.id);
    if (clickedBtn.textContent === quiz[questionNumber].rightAnswer) {
        // making text appear below buttons to say if right or wrong
        document.getElementById("answerStatus").style.borderTop = "1px solid green"
        document.getElementById("answerStatus").appendChild(result);
        // changing color based on answer
        result.textContent = "Correct!"
        result.style.color = "green"
        questionNumber++;
        takeQuiz();
    } else {
        document.getElementById("answerStatus").style.borderTop = "1px solid red"
        document.getElementById("answerStatus").appendChild(result);
        result.textContent = "Incorrect"
        result.style.color = "red"
        questionNumber++
        time -= 15
        takeQuiz();
    }
}

function inputScore() {
    var highScore = document.getElementById("questionText");
    highScore.style.textAlign = "center";
    highScore.textContent = "All done!";
    // remove button div
    buttonDiv.remove();
    // turn answerstatus into set your high score
    document.getElementById("answerStatus").style.borderTop = "0px"
    result.style.color = "white"
    result.textContent = "Your final score is " + time;
    // reveal highscorebox
    scoreBox.style.visibility = "visible";
    submitButton.addEventListener("click", saveScore);
}

function gameOver() {
    var highScore = document.getElementById("questionText");
    highScore.style.textAlign = "center";
    highScore.textContent = "You ran out of time!";
    // remove button div
    buttonDiv.remove();
    // turn answerstatus into set your high score
    document.getElementById("answerStatus").style.borderTop = "0px"
    result.style.color = "white"
    result.textContent = "Click here to start over.";
    // reveal highscorebox
    result.addEventListener("click", refreshPage);
}

function refreshPage() {
    location.reload();
}

function saveScore() {
    // get form input text
    if (localStorage.getItem("score")) {
        var oldScore = localStorage.getItem("score");
        oldScore = JSON.parse(oldScore);
        var newScore = {
            name: initialsInput.value,
            score: time
        }
        oldScore.push(newScore);
        localStorage.setItem("score", JSON.stringify(oldScore));
        showScores();
    } else {
        var newScore = {
            name: initialsInput.value,
            score: time
        }
        scoreArr.push(newScore);
        localStorage.setItem("score", JSON.stringify(scoreArr));
        showScores();
    }
}

// function showScores() {
//     if (localStorage.getItem("score")) {
//     var oldScore = localStorage.getItem("score");
//     oldScore = JSON.parse(oldScore);
//     oldScore = oldScore.sort((a, b) => a.score - b.score);
//     console.log(oldScore);
//     var scoreList = document.getElementById("list");
//     console.log(scoreList)
//     // populate highscores list in reverse order, i = oldScore.length; i > 0; i--;
//     // do a for loop for creating a list item for each score
//     } else {
//         console.log("theres no scores")
//     }
// }