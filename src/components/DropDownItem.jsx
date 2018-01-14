import React from 'react';

class DropDownItem extends React.Component {
		constructor (props) {
				super(props);
				this.state = {};
				this.handleSelection = this.handleSelection.bind(this);
		}

		render () {
				return (<div className='dropdown--item' onClick={this.handleSelection}>
						{this.props.item.name}
				</div>);
		}

		handleSelection () {
				this.props.selectItem(this.props.item);
		}
}

export default DropDownItem;
