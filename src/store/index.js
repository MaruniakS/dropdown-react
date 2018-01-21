import { createStore } from 'redux';
import dropDownApp from '../reducers/index';

const store = createStore(
		dropDownApp
);

export default store;
