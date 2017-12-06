import React, { Component } from 'react';

class Testtaking extends Component{

      render() {
        return (
            <div id="Test" className="Testtaking">
            {this.props.quiz.questions.title.map((title) =>
            var title={title} 
            <h1> title </h1>
                {this.props.quiz.questions.answers.description.map((description) =>
                    description={description}
                    <label> <input type="radio" value={description} /></label>
            )}
          )}

        )

}