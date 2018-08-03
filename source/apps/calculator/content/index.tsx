import * as React from "react";
import WindowContent from "@components/WindowContent";
import {div, el} from "@utils";
import ScrolledContent from "@components/ScrolledContent";
console.log('calculator content')

export class CalculatorContent extends WindowContent<any, {
	currentValue: Array<string>,
	value1		: number | null,
	value2		: number | null,
	action		: string,
}> {
	private actions = [
		"c",  "", "<", "/",
		"7", "8", "9", "*",
		"4", "5", "6", "-",
		"1", "2", "3", "+",
		"" , "0", ".", "=",
	]
	constructor(props){
		super(props);
		let state = {
			...this.reset(true),
			...this.state,
		}

		this.state = state;
		this.onButtonClick = this.onButtonClick.bind(this);

		this.on('keydown', this.onKeydown.bind(this));
	}
	render(){
		let value = this.state.currentValue.join('') || '0';
		return (
			<div className={ this.props.className }>
				<Display>
					<ScrolledContent>
						<DisplayText>
							<DisplayAction data-value={ this.state.action } />
							<DisplayValues>
								{
									[1, 2].map( key => {
										let value = this.state['value' + key];
										if(value == null) value = undefined;
										else value = value.toString();
										return <DisplayValue
											key={key}
											Index={ key }
											data-value={ value }
										/>
									})
								}
							</DisplayValues>
						</DisplayText>
					</ScrolledContent>
				</Display>
				<Buttons>
					{
						this.actions.map((action, index) =>
							<Button
								key={index}
								onClick={this.onButtonClick}
								data-action={action}
							/>
						)
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
				if( value != '0' || this.addZero(this.state.currentValue) ){
					value = this.state.currentValue.concat(value);
				} else {
					value = this.state.currentValue;
				}
				state = {
					...state,
					currentValue: value,
					value2: value.join('') || 0,
				};
			break;
			case 'c':
				state = this.reset(true);
			break;
			case '.':
				if( this.state.currentValue.indexOf('.') !== -1 ) break;
				value = this.state.currentValue.concat(value);
				state = {
					...state,
					currentValue: value,
					value2: parseFloat(value.join('')) || 0,
				}
			break;
			case '+':
			case '-':
			case '*':
			case '/':
				state = {
					...state,
					action: value,
					value1: this.calc( this.state.value1, this.state.value2, this.state.action ),
					value2: 0,
					currentValue: [],
				}
			break;
			case '=':
				state = {
					...state,
					...this.reset(true),
					value2: this.calc( this.state.value1, this.state.value2, this.state.action ),
				}
			break;
			case '<':
				value = [].concat(this.state.currentValue);
				value.splice(-1);
				state = {
					...state,
					currentValue: value,
					value2: parseFloat(value.join('')) || 0,
				}
			break;
		}
		this.setState(state);
	}
	calc(value1, value2, action){
		if(!value2) value2 = 0;
		if(action && value1 != null) return eval( parseFloat(value1) + action + parseFloat(value2) );
		return value2;
	}
	reset(returnState = false){
		const newState = {
			...this.state,
			currentValue: [],
			value1: null,
			value2: 0,
			action: '',
		}
		if(returnState) return newState;
		this.setState(newState)
	}
	addZero(currentValue){
		return !!currentValue.filter(value => value != '0').length;
	}
	onKeydown(){

	}
}


let {
	Self: StyledCalculatorContent,
	Display,
	DisplayText,
	DisplayValue,
	DisplayValues,
	DisplayAction,
	Buttons,
	Button,
} = require('./styles').default(CalculatorContent, {
	Display: div("Calculator_Display"),
	DisplayText: div("Calculator_DisplayText"),
	DisplayValue: div("Calculator_DisplayValue"),
	DisplayValues: div("Calculator_DisplayValues"),
	DisplayAction: div("Calculator_DisplayAction"),
	Buttons: div("Calculator_Buttons"),
	Button: el("button", "Calculator_Button")
})

export default StyledCalculatorContent;