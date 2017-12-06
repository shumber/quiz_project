import React, { Component } from 'react';
import './Quiz.css';
import Quiz from './Quiz';
var shortid = require('shortid');


class QuizManager extends Component {
    
    constructor(props) {
        super(props);

        const savedState = window.localStorage.getItem("state");
        if (savedState) {
            this.state = JSON.parse(savedState);
        } else {
            this.state = {
                quizes: [{
                    id: shortid.generate(),
                    quizTitle: 'Add quiz title',
                    quizDescription: 'Add quiz description',
                    draft: 1,
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
                }],
                editId: null,
            }
        }  
    }

    componentDidUpdate() {
        window.localStorage.setItem("state", JSON.stringify(this.state));
    }

    addQuiz() {
        const quizes = this.state.quizes.slice();
        let results = [{
            id: shortid.generate(),
            title: 'Add result title',
            description: 'Add result description'}];
        let questions = [];
        let answers = [{
            id: shortid.generate(),
            description: 'Add answer text',
            associatedResult: null}];
        questions.push({id: shortid.generate(), title: 'Add question title', description: 'Add question Description', answers: answers});
        quizes.push({'id': shortid.generate(), 'quizTitle':'Add a quiz title', 'results': results, 'questions': questions});
        this.setState({'quizes': quizes});
    }
/*
    saveQuiz(quizId, quiz) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        quizes[i].quiz = quiz;
        this.setState({'quizes':quizes})
    }
*/
    editQuiz(quizId) {
        let i = this.state.quizes.map(item => item.id).indexOf(quizId);
        this.setState({'editId': i});
      }

      saveQuiz() {
          this.setState({'editId': null})
      }

    //Quiz update functions
    addResult(quizId) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        quizes[i].results.push({id: shortid.generate(), title:'Add result title', description:'Add result description'});
        this.setState({'quizes': quizes});
        //this.setState({'numResults': this.state.numResults + 1});
      }
    
      updateResultTitle(quizId, resultId, title) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        const results = quizes[i].results;
        let j = results.map(item => item.id).indexOf(resultId);
        results[j].title = title;
        this.setState({'quizes':quizes})
      }
    
      updateResultDescription(quizId, resultId, description) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        const results = quizes[i].results;
        let j = results.map(item => item.id).indexOf(resultId);
        results[j].description = description;
        this.setState({'quizes':quizes})
      }
    
      deleteResult(quizId, resultId) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        const results = quizes[i].results;
        let j = results.map(item => item.id).indexOf(resultId);
        results.splice(j, 1);
        this.setState({'quizes': quizes});
      }
    
      addAnswer(quizId, questionId, description, associatedResult) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        const questions = quizes[i].questions
        let j = questions.map(item => item.id).indexOf(questionId);
        questions[j].answers.push({id: shortid.generate(), description: description, associatedResult: associatedResult});
        this.setState({'quizes': quizes});
      }
    
      deleteAnswer(quizId, questionId, answerId) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        const questions = quizes[i].questions
        let j = questions.map(item => item.id).indexOf(questionId);
        let k = questions[j].answers.map(item => item.id).indexOf(answerId)
        questions[j].answers.splice(k, 1);
        this.setState({'questions': questions});
      }
    
      addQuestion(quizId) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        const questions = quizes[i].questions;
        let answers = [{
          id: shortid.generate(),
          description: 'Add answer text',
          associatedResult: null}]
        questions.push({id: shortid.generate(), title: 'Add question title', description: 'Add question Description', answers: answers});
        this.setState({'questions': questions});
      }

      deleteQuestion(quizId, questionId) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        const questions = quizes[i].questions;
        let j = questions.map(item => item.id).indexOf(questionId);
        questions.splice(j, 1);
        this.setState({'quizes': quizes});
      }

      updateQuizInfoTitle(quizId, title) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        quizes[i].quizTitle = title;
        this.setState({'quizes':quizes})
      }
    
      updateQuizInfoDescription(quizId, description) {
        const quizes = this.state.quizes.slice();
        let i = quizes.map(item => item.id).indexOf(quizId);
        quizes[i].QuizDescription = description;
        this.setState({'quizes':quizes})
      }

    //need updateQuestionTitle()
    //need updateQuestionDescription()
    //need updateAnswerText()
    //need updateAnswerResult()


    render() {
        let editExisting = null
        if (1) {
            editExisting = 
                    <div className="">Edit existing quiz:
                        {this.state.quizes.map((quiz) => 
                            <div className="">{quiz.quizTitle}<button className="addButton" onClick={() => this.editQuiz(quiz.id)}>Edit Quiz</button></div>
                        )}
                    </div>
        }

        if (this.state.editId == null) {
            return (
                <div id="Quiz_manager" className="">Manage Quizes!
                    <div><button className="addButton" onClick={() => this.addQuiz()}>Add a new quiz!</button> </div>
                        {editExisting}
                </div>

            );
        }

        if (this.state.editId != null){

            return (
                <div className="">
                        <Quiz 
                            quiz = {this.state.quizes[this.state.editId]}
                            saveQuiz = {(...args) => this.saveQuiz(...args)}
                            updateQuizInfoTitle={(...args) => this.updateQuizInfoTitle(...args)}
                            updateQuizInfoDescription={(...args) => this.updateQuizInfoDescription(...args)} 
                            updateResultTitle={(...args) => this.updateResultTitle(...args)}
                            updateResultDescription={(...args) => this.updateResultDescription(...args)}  
                            addResult={(...args) => this.addResult(...args)} 
                            deleteResult={(...args) => this.deleteResult(...args)} 
                            addAnswers={() => this.addAnswer()} 
                            addAnswerButtonText={this.state.addAnswerButtonText} 
                            addQuestion={(...args) => this.addQuestion(...args)}
                            deleteQuestion={(...args) => this.deleteQuestion(...args)}
                            addAnswer={(...args) => this.addAnswer(...args)}
                            deleteAnswer={(...args) => this.deleteAnswer(...args)}  
                        />
                </div>
            );
        }
    }


}
export default QuizManager;