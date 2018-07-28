import { createStore as _createStore } from 'redux'

import {reducer as LayoutReducer} from "../components/Layout/index";
import {reducer as systemReducer} from "./"

export function createStore(){
	const store = _createStore(function(state:any, action){
		state = {...systemReducer(state, action)};
		state = {...LayoutReducer(state, action)};
		return state;
	});
	
	Object.assign(window, {
		__store: store,
	})
	return store;
}