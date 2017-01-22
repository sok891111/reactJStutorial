// entry.js
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Square, Board , Game} from './components/app.jsx';


ReactDOM.render(
	<Game />,
	document.getElementById('container')
);

