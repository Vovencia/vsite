import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import loadApplications from "./system/load-applications";

import "./index.styl";

import Layout, {reducer as LayoutReducer} from "./components/Layout/index";
import {reducer as systemReducer} from "./system"

export const store = createStore(function(state:any, action){
	state = {...systemReducer(store, state, action)};
	state = {...LayoutReducer(state, action)};
	return state;
});

Object.assign(window, {
	__store: store,
})

store.dispatch({
	type: 'loading',
	name: 'applications',
})
store.dispatch({
	type: 'loading',
	name: 'delay',
})

setTimeout(() => {
	store.dispatch({
		type: 'loaded',
		name: 'delay',
	})
}, 1000);

loadApplications().then(function(apps){
	store.dispatch({
		type: 'Taskbar.add',
		list: apps
	})

	store.dispatch({
		type: 'loaded',
		name: 'applications',
	})
});

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById("App")
);