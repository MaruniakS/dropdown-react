import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/container';
import { Provider } from 'react-redux';
import store from './store';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
			<Provider store={store}>
					<App />
			</Provider>,
		 document.getElementById('appRoot')
	);
});
