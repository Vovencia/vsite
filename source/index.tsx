import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'


export {default as styled} from 'styled-components';
export {default as _styled} from './mixins/styled';

// styled._ = require("./mixins/styled");

import "./index.styl";

import Layout from "./components/Layout/index";

const store = createStore(function(state, action){
	return state;
});

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById("App")
);