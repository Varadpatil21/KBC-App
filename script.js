let my = document.getElementById('name');
let player = document.getElementById('Player-name');
let press = document.getElementById('btn');
let prop=document.getElementById('quiz')

const inputname = () => {
    let text = my.value;
    if (text == "") {
        alert("This field can't remain empty"); 
    } else {
        player.innerText = `Player Name: ${text}`;
        prop.classList.remove('hidden')
    }
   
};

press.onclick = inputname; 

const questions=[{
    question:"Which is the largest animal in the World?",
    answers:[{text:"Shark",correct:false},{text:"Blue Whale",correct:true},{text:"Elepahant",correct:false},{text:"Giraffe",correct:false}]
},
{
    question:"Smallest quantinent in the World?",
    answers:[{text:"Asia",correct:false},{text:"Austrelia",correct:true},{text:"Arctic",correct:false},{text:"Africa",correct:false}]
}]


const quetsionele=document.getElementById('quest')
const answerbutt=document.getElementById('answer-button')


let score = 0; // Initialize the score

function startQuiz() {
    currIndex = 0;
    score = 0; // Reset the score
    showQuestion();
}

function showQuestion() {

    if (currIndex > 0) {
        let prevMon = document.getElementById(`m${currIndex}`);
        prevMon.style.backgroundColor = "";
    }
    answerbutt.innerHTML = "";
    let currquestion = questions[currIndex];
    let mon=document.getElementById(`m${currIndex+1}`)
    mon.style.backgroundColor="rgb(45, 250, 8)";
    let quesNo = currIndex + 1;
    quetsionele.innerText = `${quesNo}. ${currquestion.question}`;

    currquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerbutt.append(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectans);
    });
    mon.style.removeProperty(backgroundColor)
}

function selectans(e) {
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    
    if (isCorrect) {
        selectbtn.classList.add("correct");
        score++; // Increase the score for correct answers
    } else {
        selectbtn.classList.add("incorrect");
        gameOver();
        return; // End the game on incorrect answer
    }

    Array.from(answerbutt.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Show the next question or end the game
    if (currIndex < questions.length - 1) {
        currIndex++;
        setTimeout(showQuestion, 1000); // Show the next question after a delay
    } else {
        // End of questions, show final score or a completion message
        setTimeout(showScore, 1000);
    }
}

function gameOver() {
    answerbutt.innerHTML = `<p class="game-over">Game Over</p>`;
}

function showScore() {
    answerbutt.innerHTML = `<p class="final-score">Final Score: ${score}</p>`;
}

startQuiz();
