//Variables to access html elements
var startButton = document.getElementById('start')
var questionsEl = document.getElementById('questions')
var choicesEl = document.getElementById('choices')
var feedbackEl = document.getElementById('feedback')
var submitButton = document.getElementById('submit')
var initialsEl = document.getElementById('initials')
var timerEl = document.getElementById('time')
var time = 60
var timerId

//Variable question index start at 0
var currentQuestionIndex = 0;

//Variables questions with all the questions, choices and answers
var questions = [
    {
        title:'Which command log a message to the console?', 
        choices:['console.log.message()', 'consolelog()','console.log()', 'consoleLog()'],
        answer:'console.log()'
    },
    {
        title:'Which code line avoid to refresh the browser:', 
        choices:['event.preventRefresh()', 'event.avoidDefault()','event.preventDefault', 'event.preventDefault()'],
        answer:'event.preventDefault()'
    },
    {
        title:'Array are a type of variable that are:', 
        choices:['events', 'styles','collections', 'statements'],
        answer:'collections'
    },
    {
        title:'comfim() method returns:', 
        choices:['boolean', 'string','arrays', 'objects'],
        answer:'boolean'
    },
    {
        title:'What is the best and cooler pet (hint: I am a cat person)?', 
        choices:['dog...', 'platypus?','>> CAT! <<', 'aloe vera plant'],
        answer:'>> CAT! <<'
    }
]

//Timer function
function clockTick() {
    time--;
    timerEl.textContent = time

    if (time <= 0) {
        endGame()
    }
}

//Start the quiz function
function startQuiz() {
    
    var startScreen = document.getElementById('start-screen')
    startScreen.setAttribute("class", "hide")

    var leaderBoardScreen = document.getElementById('leaderboard')
    leaderBoardScreen.setAttribute('class', 'hide')

    timerId = setInterval(clockTick, 1000)

    getQuestion()

}

//Generate the questions and answers
function getQuestion() {

    questionsEl.removeAttribute('class')
    var currentQuestion = questions[currentQuestionIndex]
    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.title
    
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var optionButton = document.createElement("button")
        optionButton.setAttribute("class", "choice")
        optionButton.setAttribute("value", choice)
        optionButton.setAttribute("style", "display:block; margin-top:10px; margin-left:10px;")

        optionButton.textContent = choice
        optionButton.onclick = answerClick
        choicesEl.appendChild(optionButton)
    })
    
}

//Define the answers, and continue the loop
function answerClick () {

    if (this.value !== questions[currentQuestionIndex].answer) {
        feedbackEl.textContent = "Wrong!"
    }
    else {
        feedbackEl.textContent = "Right!"
    }

    feedbackEl.setAttribute('class', 'feedback')
    setTimeout(function (){
        feedbackEl.setAttribute('class', 'feedback hide')
    }, 1000)
 
    currentQuestionIndex++

    if (currentQuestionIndex === questions.length) {
        endGame()
    } else {
        getQuestion()
    }
       
}

//End of the game function
function endGame() {

    feedbackEl.textContent = "The end!"
    clearInterval(timerId)

    var endScreen = document.getElementById('end-screen')
    endScreen.removeAttribute('class')

    var showScore = document.getElementById('final-score')
    showScore.textContent = time

    var questionScreen = document.getElementById('questions')
    questionScreen.setAttribute('class', 'hide')

}

//Submit your score to the local storage
function submitInitials() {
    var initials = initialsEl.value.trim()
    var userScore = {
        score: time,
        initials: initials
    }
    var highscores = [] || JSON.parse(window.localStorage.getItem('highscores'))
    highscores.push(userScore)
    window.localStorage.setItem("highscores", JSON.stringify(highscores))

    var endScreen = document.getElementById('end-screen')
    endScreen.setAttribute('class', 'hide')

    var leaderBoardScreen = document.getElementById('leaderboard')
    leaderBoardScreen.removeAttribute('class')  

    highscores.forEach(function(score) {
        var liTag = document.createElement('li')
        liTag.textContent = score.initials
        var listItem = document.getElementById('highscores')
        listItem.appendChild(liTag)
    })

    var returnButton = document.getElementById('return-home')
    
    returnButton.onclick = startQuiz
}

//Button to start the quizz
startButton.onclick = startQuiz

//Button to submit your score
submitButton.onclick = submitInitials