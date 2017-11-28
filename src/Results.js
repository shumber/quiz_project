import React, { Component } from 'react';


class Results extends Component {
    render() {
        return (
            <div id="Results">
                <div id="results_title">results title <input type="text"></input></div>
                <div id="results_description">results description <input type="text"></input></div>
                <div id="results_add_button">results add button 
                    <button onClick={() => this.props.addResult()}>{this.props.addResultsButtonText}</button>
                </div>
            </div>
            
        );
    }
}

export default Results