import React from 'react';
import DropDown from './DropDown';
import withOutsideClicker from './OutsideClicker';

class App extends React.Component {
	render () {
			const DropDownMenu = withOutsideClicker(DropDown);
		return (<div className='appContainer'>
				<div className='content'>
						<DropDownMenu/>
						<DropDownMenu/>
				</div>
		</div>);
	}
}

export default App;
