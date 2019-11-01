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

const startQuizButton = document.getElementById("start_quiz-btn");
const frontContainer = document.getElementById("front_page-container");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const button1Element = document.getElementById("button1");
const button2Element = document.getElementById("button2");
const button3Element = document.getElementById("button3");
const button4Element = document.getElementById("button4");


let shuffledQuestions, currentQuestionIndex;

startQuizButton.addEventListener('click', startGame);

function startGame() {
    console.log("Started");
    frontContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(title) {
    questionElement.innerText = title.title;
    title.choices.forEach(key => {
        const button = document.createElement('button');
        button.innerText = key.text;
        button.classList.add('btn');
        if(key.answer) {
            button.dataset.answer = key.answer;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    while(answerButtonsElement.firstChild)
}

function selectAnswer(e) {

}


