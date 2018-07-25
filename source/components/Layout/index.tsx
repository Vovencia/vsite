import * as React from "react";

import "./index.styl";


var Layout_ = require('./style.ts')(function Layout(props, ...args){
	return (
		<div {...props}></div>
	)
});


export default class Layout extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<Layout_>
				<img src={ require('../../assets/images/download.png') } alt="" />
			</Layout_>
		)
	}
}