import * as React from "react";

import "./index.styl";

class App extends React.Component {
	render() {
		return <div {...this.props}>123</div>
	}
}

var StyledApp = require('./style.ts')(App);


export default class Layout extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<StyledApp>123</StyledApp>
		)
	}
}