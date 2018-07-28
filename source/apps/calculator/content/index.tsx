import * as React from "react";
import WindowContent from "../../../components/WindowContent";
import {div, el} from "../../../utils";
import ScrolledContent from "../../../components/ScrolledContent";

export class CalculatorContent extends WindowContent<any, {
	currentValue: Array<string>,
	value1		: number,
	value2		: number,
	isDecimal	: boolean,
	action		: string,
}> {
	private actions = [
		"" ,  "",  "", "c",
		"7", "8", "9", "x",
		"4", "5", "6", "-",
		"1", "2", "3", "+",
		"" , "0", ".", "=",
	]
	constructor(props){
		super(props);
		this.state = {
			currentValue: [],
			value1: 0,
			value2: 0,
			isDecimal: false,
			action: '',
			...this.state
		}
		this.onButtonClick = this.onButtonClick.bind(this)
	}
	render(){
		let value = this.state.currentValue.join('') || '0';
		return (
			<div className={ this.props.className }>
				<Display>
					<ScrolledContent>
						<DisplayText data-value={value} />
					</ScrolledContent>
				</Display>
				<Buttons>
					{
						this.actions.map( (action, index) => <Button key={index} onClick={this.onButtonClick} data-action={action} /> )
					}
				</Buttons>
			</div>
		);
	}
	onButtonClick(event){
		event.preventDefault();
		var value = event.target.dataset.action;
		var state = {};
		switch(value){
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				value = this.state.currentValue.concat(value);
				state = {
					...state,
					currentValue: value,
				};
			break;
			case 'c':
				state = {
					...state,
					currentValue: [],
					isDecimal: false,
					value1: 0,
					value2: 0,
					action: '',
				}
			break;
			case '.':
				if( this.state.isDecimal ) break;
				value = this.state.currentValue.concat(value);
				state = {
					...state,
					isDecimal: true,
					currentValue: value,
				}
			break;
		}
		this.setState(state);
	}
}


let {
	Self: StyledCalculatorContent,
	Display,
	DisplayText,
	Buttons,
	Button,
} = require('./styles')(CalculatorContent, {
	Display: div("Calculator_Display"),
	DisplayText: div("Calculator_DisplayText"),
	Buttons: div("Calculator_Buttons"),
	Button: el("button", "Calculator_Button")
})

export default StyledCalculatorContent;