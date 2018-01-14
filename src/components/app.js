import React from 'react';
import DropDown from './DropDown';

class App extends React.Component {
	render () {
		return (<div className='appContainer'>
				<div className='content'>
						hello world
						<DropDown/>
				</div>
		</div>);
	}
}

export default App;
