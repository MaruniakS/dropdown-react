import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import * as dropDownActions from '../actions';
import withOutsideClicker from './OutsideClicker';

class App extends React.Component {
	render () {
			const { dropDowns, dispatch } = this.props;
			const actions = bindActionCreators(dropDownActions, dispatch);
			const DropDownMenu = withOutsideClicker(DropDown);
			const lists = dropDowns.map((item, index) => {
					return <DropDownMenu actions={actions} index={index} {...item} key={index}/>
			});
			return (<div className='appContainer'>
					<div className='content'>
							{lists}
					</div>
			</div>);
	}
}

const APP = connect(state => ({
		dropDowns: state.dropDowns
}))(App);

export default APP;
