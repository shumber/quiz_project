import React, { Component } from 'react';

class Testtaking extends Component{

      render() {
        return (
            <div id="Test" className="Testtaking">
            {this.props.quiz.results.map((questions) =>
                <div> this.props.question.title </div>
                {this.props.quiz.results.map((answers) =>
                <label> <input type="radio" value={this.props.question.answers.description} /></label>
                }
          )}

        )

}