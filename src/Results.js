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
        this.props.updateResultTitle(this.props.resultId, event.target.value);
    }

    handleDescriptionChange(event) {
        this.props.updateResultDescription(this.props.resultId, event.target.value);
    }
    
    
      handleSubmit(event) {
        event.preventDefault();
    
        this.props.onSelectImage(this.state.url);
      }

    render() {
        return (
            <div id="Results" className="result">
                <div id="results_title"><input type="text" className="textInput" placeholder="Add result title" onChange={(e) => this.handleTitleChange(e)}></input></div>
                <div id="results_description"><textarea name="questionDescription" className="textInput" cols="40" rows="5" placeholder="Add result description" onChange={(e) => this.handleDescriptionChange(e)}></textarea></div>
                <div id="results_add_button">
                    <button onClick={() => this.props.deleteResult(this.props.resultId)}>{this.props.deleteResultsButtonText}</button>
                </div>
            </div>
            
        );
    }
}

export default Results