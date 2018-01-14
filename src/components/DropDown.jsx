import React from 'react';
import DropDownItem from './DropDownItem';

class DropDown extends React.Component {
	constructor (props) {
			super(props);
			this.state = {};
	}

	render () {
			return (<div className='dropdown'>
					DropDown container
					<DropDownItem/>
			</div>);
	}
}

export default DropDown;
