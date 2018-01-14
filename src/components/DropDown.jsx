import React from 'react';
import DropDownItem from './DropDownItem';

class DropDown extends React.Component {
	constructor (props) {
			super(props);
			this.state = {
					isOpened: this.props.outside
			};

			this.toggleOpened = this.toggleOpened.bind(this);
	}

	componentWillReceiveProps (props) {
			if (props.outside) {
					this.setState({
							isOpened: false
					});
			}
	}

	render () {
			const items = this.props.items.map((item) => {
					return <DropDownItem key={item.id} title={item.name} />
			});
			const isOpened = this.state.isOpened;
			return (<div className={'dropdown ' + (isOpened ? 'dropdown-is-opened' : '')}>
					<div className='selector' onClick={this.toggleOpened}>
							Select country <span className='caret'/>
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
}

DropDown.defaultProps = {
	items: [
			{
					id: '1',
					name: 'Ukraine'
			},
			{
					id: '2',
					name: 'USA'
			},
			{
					id: '3',
					name: 'England'
			},
			{
					id: '4',
					name: 'Spain'
			},
			{
					id: '5',
					name: 'Poland'
			}
	]
};

export default DropDown;
