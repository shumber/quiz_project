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
        this.setState({
          title: event.target.value
        });
    }

    handleDescriptionChange(event) {
    this.setState({
        description: event.target.value
    });
    }
    
    
      handleSubmit(event) {
        event.preventDefault();
    
        this.props.onSelectImage(this.state.url);
      }

    render() {
        return (
            <div id="Results" class="result">
                <div id="results_title"><input type="text" class="textInput" placeholder="Add result title" onChange={(e) => this.handleTitleChange(e)}></input></div>
                <div id="results_description"><textarea name="questionDescription" class="textInput" cols="40" rows="5" placeholder="Add result description" onChange={(e) => this.handleDescriptionChange(e)}></textarea></div>
                <div id="results_add_button">
                    <button onClick={() => this.props.addResult(this.state.title, this.state.description)}>{this.props.addResultsButtonText}</button>
                    <button onClick={() => this.props.deleteResult(this.state.resultId)}>{this.props.deleteResultsButtonText}</button>
                </div>
            </div>
            
        );
    }
}

export default Results