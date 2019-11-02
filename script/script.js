// Author: Madhumitha Prabakaran

const startQuizButton = document.getElementById("start_quiz-btn");
const frontContainer = document.getElementById("front_page-container");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const button1Element = document.getElementById("button1");
const button2Element = document.getElementById("button2");
const button3Element = document.getElementById("button3");
const button4Element = document.getElementById("button4");
const checkElement = document.getElementById("check");
const checkDisplayElement = document.getElementById("check_display");
const viewHighScoreElement = document.getElementById("viewHighScore");
const timeElement = document.getElementById("time");
const middlePageContainerElement = document.getElementById("middlePageContainer");
const lastPageContainerElement = document.getElementById("lastPageContainer");
const finalScoreElement = document.getElementById("finalScore");
const initialsElement = document.getElementById("initials");
const submitButtonElement = document.getElementById("submitButton");
const goBackElement = document.getElementById("goBack");
const clearHighScoresElement = document.getElementById("clearHighScores");
const navBarElement = document.getElementById("navbarId");

//Create Questions

let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Which of the following type of variable takes precedence over other if names are same?",
        choices: ["global variable", "local variable", "Both of the above", "None of the above"],
        answer: "local variable"    
    },
    {
        title: "Which built-in method sorts the elements of an array?",
        choices: ["changeOrder(order)", "order()", "sort()", "None of the above"],
        answer: "sort()"
    },
    {
        title: "Which of the following function of Number object returns a string value version of the current number?",
        choices: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
        answer: "toString()"   
    }
]

// Set Variables 

const lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
const questionLength = questions.length;
let totalQuestionTime = questionLength * 15; //15sec for each questions
let TIMER, flag;  
let finalScore = 0;

frontPage();

function startGame() {
    frontContainer.classList.add('hide');
    showQuestion();
    questionContainer.classList.remove('hide');
    counterRender();
    TIMER = setInterval(counterRender,1000);
}

function showQuestion() {
        let runningChoicesIndex = 0;
        questionElement.textContent = questions[runningQuestionIndex].title;
        button1Element.textContent = questions[runningQuestionIndex].choices[runningChoicesIndex];
        button2Element.textContent = questions[runningQuestionIndex].choices[++runningChoicesIndex];
        button3Element.textContent = questions[runningQuestionIndex].choices[++runningChoicesIndex];
        button4Element.textContent = questions[runningQuestionIndex].choices[++runningChoicesIndex];
}

function counterRender() {
    --totalQuestionTime;
    timeElement.innerHTML = "Time : " + totalQuestionTime;
    if(totalQuestionTime === 0)
    {
        clearInterval(TIMER);
        scoreRender();
    }
}

function checkAnswer() {
    console.log("Madhu");
    if("alert" == questions[runningQuestionIndex].answer) {
        answerIsCorrect();
    }
    else {
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        showQuestion();
    }
    else {
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect() {
    checkElement.classList.remove('hide');
    checkDisplayElement.innerHTML = "Correct";
}

function answerIsWrong() {
    totalQuestionTime -= 15;
    checkElement.classList.remove('hide');
    checkDisplayElement.innerHTML = "Wrong";
}

function scoreRender() {
    questionContainer.classList.add('hide');
    middlePageContainerElement.classList.remove('hide');
    finalScoreElement.innerHTML = "Your Final Score is " + totalQuestionTime;

    submitButtonElement.addEventListener('click', finalPage);
};

function finalPage() {
    middlePageContainerElement.classList.add('hide');
    lastPageContainerElement.classList.remove('hide');
    navBarElement.classList.add('hide');
    totalQuestionTime = questionLength * 15;
    clearHighScoresElement.addEventListener('click', removeHighScore);
    goBackElement.addEventListener('click', frontPage);
}

function removeHighScore() {

}

function frontPage() {
    navBarElement.classList.remove('hide');
    lastPageContainerElement.classList.add('hide');
    frontContainer.classList.remove('hide');
    timeElement.innerHTML = "Time : 0";
    startQuizButton.addEventListener('click', startGame);
}




