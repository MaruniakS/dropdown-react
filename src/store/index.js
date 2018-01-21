import { createStore } from 'redux';
import dropDownApp from '../reducers/index';
import { INITIAL_STATE } from './initial_state';

const store = createStore(
		dropDownApp,
		INITIAL_STATE
);

export default store;
