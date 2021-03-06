import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
