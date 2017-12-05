import React, { Component } from 'react';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
    }

    handleTitleChange(event) {
        this.props.updateResultTitle(this.props.quizId, this.props.result.id, event.target.value);
    }

    handleDescriptionChange(event) {
        this.props.updateResultDescription(this.props.quizId, this.props.result.id, event.target.value);
    }
    

    render() {
        return (
            <div id="Results" className="result">
                <div id="results_title"><input type="text" className="textInput" placeholder={this.props.result.title} onChange={(e) => this.handleTitleChange(e)}></input></div>
                <div id="results_description"><textarea name="questionDescription" className="textInput" cols="40" rows="5" placeholder={this.props.result.description} onChange={(e) => this.handleDescriptionChange(e)}></textarea></div>
                <div id="results_add_button">
                    <button className="deleteButton" onClick={() => this.props.deleteResult(this.props.quizId, this.props.result.id)}>Delete Result</button>
                </div>
            </div>
            
        );
    }
}

export default Results