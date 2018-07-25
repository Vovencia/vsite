import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'


import styled, {StyledInterface} from 'styled-components';
import styledMixins from './mixins/styled';

var extendedStyled = {
	...styled,
	_: styledMixins
}

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

export {extendedStyled as styled}