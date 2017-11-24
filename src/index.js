import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Quiz from './Quiz';
import Quiz_info from './Quiz_info';
import Questions from './Questions';
import Results from './Results';
import Answers from './Answer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Quiz />, document.getElementById('root'));
registerServiceWorker();
