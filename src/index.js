import Bootstrap from 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line
registerServiceWorker();
