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
                <div id="results_title">Add results title:<input type="text" onChange={(e) => this.handleTitleChange(e)}></input></div>
                <div id="results_description">Add results description:<input type="text" onChange={(e) => this.handleDescriptionChange(e)}></input></div>
                <div id="results_add_button">
                    <button onClick={() => this.props.addResult(this.state.title, this.state.description)}>{this.props.addResultsButtonText}</button>
                    <button onClick={() => this.props.deleteResult(this.state.resultId)}>{this.props.deleteResultsButtonText}</button>
                </div>
            </div>
            
        );
    }
}

export default Results