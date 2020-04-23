import React from 'react'
import '../../styles/quiz.css'


const questions = require('./questions').questions;

class Game extends React.Component {
    currentQuestion = {}
    acceptingAnswers = false
    score = 0
    questionCounter = 0

    CORRECT_BONUS = 1
    MAX_QUESTIONS = 10


    availableQuestions = [...questions]

    startGame = () => {
        this.questionCounter = 0
        this.score = 0
        console.log(this.availableQuestions)
        this.getNewQuestion()
    }

    getNewQuestion = () => {

        if(this.availableQuestions.length == 0 || this.questionCounter >= this.MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', this.score)
            return window.location.assign("impressionism-quiz-results")
        }

        this.questionCounter++
        document.getElementById('progressText').innerHTML = "Question " + this.questionCounter + "/" + this.MAX_QUESTIONS

        document.getElementById("progressBarFull").style.width = ((this.questionCounter / this.MAX_QUESTIONS)*100) + "%"

        const questionIndex = Math.floor(Math.random() * this.availableQuestions.length)
        this.currentQuestion = this.availableQuestions[questionIndex]
        document.getElementById('question').innerText = this.currentQuestion.question
        Array.from(document.getElementsByClassName('choice-text')).forEach( choice => {
            const number = choice.dataset['number']
            choice.innerText = this.currentQuestion['choice' + number]
            })
        this.availableQuestions.splice(questionIndex, 1)
        this.acceptingAnswers = true

        Array.from(document.getElementsByClassName('choice-text')).forEach(choice =>{
            choice.addEventListener("click", e =>{
                if(!this.acceptingAnswers) return

                this.acceptingAnswers = false
                const selectedChoice = e.target
                const selectedAnswer = selectedChoice.dataset['number']

                const classToApply = selectedAnswer == this.currentQuestion.answer ? "correct" : "incorrect";
                console.log(classToApply)

                if (classToApply == 'correct'){

                    this.incrementScore(1)
                }
                selectedChoice.parentElement.classList.add(classToApply)
                setTimeout (() => {
                    selectedChoice.parentElement.classList.remove(classToApply)
                    this.getNewQuestion()
                }, 1000)
            })
        })
    }

    incrementScore = (num) => {
        this.score += num
        document.getElementById('score').innerHTML = this.score
    }

    componentDidMount() {
        this.startGame()
    }

    render() {

    return (
        <div className="container2">
            <div id="game" className="justify-center flex-column">
                <div id="hud">
                    <div id="hud-item">
                        <p id="progressText" className="hud-prefix">Question 1/10</p>
                        <div id="progressBar">
                            <div id="progressBarFull" style={{width: "10%"}}></div>
                        </div>
                    </div>
                    <div id="hud-item">
                        <p className="hud-prefix">Score</p>
                        <h1 className="hud-main-text" id="score">0</h1>
                    </div>
                </div>
                <h2 id="question">In what year did Manet, after 20 years of trying, finally win a medal at the Salon des Beaux Arts?</h2>
                <div className="choice-container" onClick={this.getNewQuestion}>
                    <p className="choice-prefix">A</p>
                    <p className="choice-text" data-number="1">1876</p>
                </div>
                <div className="choice-container">
                    <p className="choice-prefix">B</p>
                    <p className="choice-text" data-number="2">1881</p>
                </div>
                <div className="choice-container">
                    <p className="choice-prefix">C</p>
                    <p className="choice-text" data-number="3">1885</p>
                </div>
                <div className="choice-container">
                    <p className="choice-prefix">D</p>
                    <p className="choice-text" data-number="4">1887</p>
                </div>
                </div>
        </div>
    )
}
}

export default Game