import React, { Component } from 'react';
import './Quiz.css';
import Quiz from './Quiz';
var shortid = require('shortid');


class QuizManager extends Component {
    
    constructor(props) {
        let quizes = [{}];
        const savedState = window.localStorage.getItem("state");
        if (savedState) {
            quizes = JSON.parse(savedState);
        } else {
            quizes = [{}] // initial state
        }  
        super(props);
        this.state = {
            quizes: [{
                quizId: shortid.generate(),

                quizTitle: 'Add quiz title',
                quizDescription: 'Add quiz description',
                results: [{
                    id: shortid.generate(),
                    title: 'Add result title',
                    description: 'Add result description',
                }],
                questions: [{
                    id: shortid.generate(),
                    title: 'Add question title',
                    description: 'Add qudstion description',
                    answers: [{
                    id: shortid.generate(),
                    description: 'Add answer title',
                    associatedResult: 'Select related result',
                    }]
                }]
            }]
        }
    }

    

    componentDidUpdate() {
        window.localStorage.setItem("state", JSON.stringify(this.state));
    }

    addQuiz() {
        const quizes = this.state.quizes.slice();
        quizes.push({id: shortid.generate(), quiz: null});
        this.setState({'quizes': quizes});
    }

    saveQuiz(quizId, quiz) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        quizes[i].quiz = quiz;
        this.setState({'quizes':quizes})
    }

    render() {
        return (
            <div id="Quiz_manager" className="">Manage Quizes!
                <div className="">Edit existing quiz

                </div>
                <div className="addQuiz"> <button onClick={() => this.addQuiz()}>Add Quiz</button> </div>
                    <Quiz 
                    
                    />
            </div>
        );
    }


}
export default QuizManager;