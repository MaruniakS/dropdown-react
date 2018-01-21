import React from 'react';
import DropDownItem from './DropDownItem';

class DropDown extends React.Component {
	constructor (props) {
			super(props);
			this.state = {
					isOpened: props.outside,
					title: props.title
			};

			this.toggleOpened = this.toggleOpened.bind(this);
			this.selectItem = this.selectItem.bind(this);
	}

	componentWillReceiveProps (props) {
			if (props.outside) {
					this.setState({
							isOpened: false
					});
			}
	}

	componentDidMount () {
			const title = this.props.selectedCountryId
					? this.props.countries.filter(item => item.id === this.props.selectedCountryId)[0].name
					: this.state.title;
			this.setState({
					title
			});
	}

	render () {
			const items = this.props.countries.map((item) => {
					return <DropDownItem key={item.id} text={item.name} value={item.id}
															 isSelected={item.id === this.props.selectedCountryId} selectItem={this.selectItem} />
			});
			const isOpened = this.state.isOpened;
			return (<div className={'dropdown ' + (isOpened ? 'dropdown-is-opened' : '')}>
					<div className='selector' onClick={this.toggleOpened}>
							{this.state.title} <span className='caret'/>
					</div>
					<div className='itemsContainer'>
							{items}
					</div>
			</div>);
	}

	toggleOpened () {
			this.setState ({
					isOpened: !this.state.isOpened
			});
	}

	selectItem (id) {
			this.props.onSelectValueChanged(this.props.index, id);
			this.setState ({
					isOpened: false
			});
	}
}

DropDown.defaultProps = {
		title: 'Select country'
};

export default DropDown;
