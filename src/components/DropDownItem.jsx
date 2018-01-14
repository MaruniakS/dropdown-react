import React from 'react';

class DropDownItem extends React.Component {
		constructor (props) {
				super(props);
				this.state = {};
		}

		render () {
				return (<div className='dropdown--item'>
						{this.props.title}
				</div>);
		}
}

export default DropDownItem;
