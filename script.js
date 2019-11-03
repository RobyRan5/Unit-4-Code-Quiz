var ready = prompt('Your time will start when you press Start Quiz Now.');

var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }

}
    var startButton = document.getElementById('start-btn')
    var questionContainerElement = document.getElementById
    ('question-container')

let shuffledQuestions, currnetQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innertext = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addeventlistener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton




}

$("li #buttonA").append(this.questionsArray[currentQuestionIndex].choices[0]
