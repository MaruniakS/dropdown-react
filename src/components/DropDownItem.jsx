import React from 'react';

class DropDownItem extends React.Component {
		constructor (props) {
				super(props);
				this.state = {};
				this.handleSelection = this.handleSelection.bind(this);
		}

		render () {
				return (<div className={this.props.isSelected ? 'dropdown--item-is-selected' : 'dropdown--item'} onClick={this.handleSelection}>
						{this.props.text}
				</div>);
		}

		handleSelection () {
				this.props.selectItem(this.props.value);
		}
}

export default DropDownItem;
