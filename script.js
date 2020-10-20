var divQuestion = document.getElementById('question')
var divAnswers = document.getElementById('buttons')
var divResult = document.getElementById('result')

introGame()

//Intro game info
function introGame() {

    //Generate title
    var title = document.createElement("h2")
    title.textContent = 'Coding Quiz Challenge'
    title.setAttribute('style', 'text-align: center;')
    divQuestion.append(title)

    //Generate explanations
    var content = document.createElement("p")
    content.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!'
    content.setAttribute('style', 'text-align: center;')
    divAnswers.append(content)

    //Generate button to start the game
    var button = document.createElement("button")
    button.textContent = 'Start Quiz'
    button.setAttribute('style', 'display: flex; text-align: center; justify-content: center; align-items: center;')
    divAnswers.append(button)

    //Event on the button to launch the next function
    button.addEventListener('click', buttonClick)

    //Function suppress content and move on the next step
    function buttonClick() {
    
        startQuiz()

    }

}

var question0 = ['Which command log a message to the console?', ['console.log.message()', 'consolelog()','console.log()', 'consoleLog()'], 'console.log()']
var question1 = ['Which code line avoid to refresh the browser:', ['event.preventRefresh()', 'event.avoidDefault()','event.preventDefault', 'event.preventDefault()'], 'event.preventDefault()']
var question2 = ['Array are a type of variable that are:', ['events', 'styles','collections', 'statements'], 'collections']
var question3 = ['comfim() method returns:', ['boolean', 'string','arrays', 'objects'], 'boolean']
var question4 = ['What is the best and cooler pet (hint: I am a cat person)?', ['dog...', 'platypus?','>> CAT! <<', 'aloe vera plant'], '>> CAT! <<']

var questionsArray = [question0, question1, question2, question3, question4]

var q = [
    {
        question:'Which command log a message to the console?', 
        choice:['console.log.message()', 'consolelog()','console.log()', 'consoleLog()'],
        answer:'console.log()'
    },
    {
        question:'Which code line avoid to refresh the browser:', 
        choice:['event.preventRefresh()', 'event.avoidDefault()','event.preventDefault', 'event.preventDefault()'],
        answer:'console.log()'
    }
]

q[0].question

function startQuiz() {

    makeQuiz()

    function makeQuiz() {

        for (var i = 0; i < questionsArray.length; i++) {

            //delete previous texts
            divQuestion.innerHTML = ''
            divAnswers.innerHTML = ''

            //generate the question
            var questionPop = document.createElement('h3')
            questionPop.textContent = questionsArray[i][0]
            divQuestion.append(questionPop)

            //generate buttons for the answers
            for (var j = 0; j < 4; j++) {
                var answerPop = document.createElement('button')
                answerPop.setAttribute('style', 'display:block; margin-left: 10px; margin-top:10px;')
                
                answerPop.setAttribute('value', questionsArray)
                
                answerPop.textContent = questionsArray[i][1][j]
                divAnswers.append(answerPop)
            }

            var buttonGenerated = document.querySelectorAll('button')
           

            /*
            function printAnswer() {
                if (buttonAnwers == questionsArray[i][2]) {
                    console.log("You won")
                } else {
                    console.log("Wrong!")
                }
            }
            */

        }

    }

}





/*
- Create a div with a button to start the quiz 
    -When button is clicked start timer
    -Clear the div
    -Add the question in a FOR loop
        - If question is correct: Add copy"hr and Correct!", move to the next question
        - If question is incorrect: Delete 15sec, and add copy "hr and Incorrect!", move to the next question
        After question is answered, move to the next question.
    - After 5 questions, open new div the SCORE and a input field
        Add your initial and score
        Click "add your score" or "clear your score"
            If add, stock the data into the local storage
            When one of the button is clicked move to the first page

    -If timer = 0, game is lost, go to score.
*/