function showScores() {
    if (localStorage.getItem("score")) {
        var oldScore = localStorage.getItem("score");
        oldScore = JSON.parse(oldScore);
        oldScore = oldScore.sort((a, b) => a.score - b.score);
        var scoreList = document.getElementById("list");
        // populate highscores list in reverse order, i = oldScore.length; i > 0; i--;
        // do a for loop for creating a list item for each score
        // fix this for loop
        for (var i = oldScore.length - 1; i >= 0; i--) {
            console.log(oldScore[i])
            var list = document.createElement("li")
            scoreList.appendChild(list);
            var name = oldScore[i].name;
            list.textContent = name.toUpperCase() + ": " + oldScore[i].score;
        }
        for (var i = 0; i < scoreList.getElementsByTagName("li").length; i+= 2) {
            scoreList.children[i].style.backgroundColor = "rgb(50, 50, 50)"
        }
        scoreList.children[0].style.backgroundColor = "darkred";
        document.getElementById("clear").addEventListener("click", clearScores);
    } else {
        console.log("theres no scores")
    }
}

function clearScores() {
    localStorage.setItem("score","");
    for (var i = 0; i < scoreList.getElementsByTagName("li").length; i+= 2) {
        scoreList.children[i].textContent = ""
    }
}

showScores();
