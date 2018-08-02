import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import Layout from "@components/Layout";
import "./index.styl";


export function render(store){
	ReactDOM.render(
		<Provider store={store}>
			<Layout />
		</Provider>,
		document.getElementById("App")
	);
}