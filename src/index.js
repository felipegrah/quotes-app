//src/index.js

import React from 'react';
import ReactDOM from 'react-dom';


//Import the App.js component, give react something to render
import App from './App';

//Import css file
import './index.css'

//Attach the App componnt to the div id "root" in our index.html file
ReactDOM.render(<App />, document.getElementById('root'));

