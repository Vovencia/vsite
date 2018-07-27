import * as React from "react";

export default class CalculatorContent extends React.Component {
	private content;
	constructor(props){
		super(props);
		this.content = Math.random();
	}
	render(){
		return ( <div {...this.props}>{this.content}</div> );
	}
}