import React from 'react';
import DropDownItem from './DropDownItem';

class DropDown extends React.Component {
	constructor (props) {
			super(props);
			this.state = {};
	}

	render () {
			const items = this.props.items.map((item) => {
					return <DropDownItem key={item.id} title={item.name} />
			});
			return (<div className='dropdown'>
					<div className='selector'>
							Select country <span className='caret'></span>
					</div>
					{items}
			</div>);
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
