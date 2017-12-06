import React, { Component } from 'react';

class Quiz_info extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: '',
    }
  }

  handleTitleChange(event) {
      this.props.updateQuizInfoTitle(this.props.quizId, event.target.value);
  }

  handleDescriptionChange(event) {
      this.props.updateQuizInfoDescription(this.props.quizId, event.target.value);
  }
  render() {
    return (
        <div id="Quiz_info" className="box">Quiz Information
              <div id="quiz_title">
                <input type="text" className="textInput" placeholder="Add quiz title" onChange={(e) => this.handleTitleChange(e)}></input>
              </div>
              <div id="quiz_description">
                <textarea name="quizDescription" className="textInput" cols="40" rows="5" placeholder="Add quiz description" onChange={(e) => this.handleDescriptionChange(e)}></textarea>
              </div>
        </div>

    );
  }
}

export default Quiz_info
