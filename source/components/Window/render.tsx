import * as React from "react";
import {div, el, mapToArray} from "@utils";
import {windowStates, IProps, windowBorderTypes} from "./interfaces";
import {isVisible} from "./index";


export default abstract class WindowRender extends React.PureComponent<IProps & React.HTMLAttributes<HTMLDivElement>> {
	protected boxRef = React.createRef<HTMLDivElement>();
	protected headerRef = React.createRef<HTMLDivElement>();
	
	abstract handlerOnPress(event): void;
	abstract handlerHeaderOnPress(event): void;
	abstract handlerResizeBorderPress(direction, event): void;
	
	abstract handlerButtonControlClick(type, event): void;

	checkSizeValue(value: number | string){
		if(typeof value == 'number') return value + 'px';
		return value;
	}

	render(){
		const Content = this.props.content;
		const contentState = this.props.contentState;

		let style = {
			left		: this.props.x + 'px',
			top 		: this.props.y + 'px',
			width		: this.checkSizeValue(this.props.width),
			height		: this.checkSizeValue(this.props.height),
		}
		return (
			<Box
				style={style}
				elementRef={this.boxRef}
				isVisible={ isVisible(this.props) }
				inFocus={ this.props.inFocus }
				className={this.props.className}
				onMouseDown={ this.handlerOnPress.bind(this) }
			>
				{
					this.props.resizable && mapToArray(	windowBorderTypes, (type, index) =>
						<ResizeBorder
							key={index}
							onMouseDown={ this.handlerResizeBorderPress.bind(this, type) }
							Type={type}
						/>
					)
				}
				<Header
					elementRef	={ this.headerRef }

					onMouseDown	={ this.handlerHeaderOnPress.bind(this) }
				>
					<Buttons>
						{
							['close', this.props.resizable && 'maximize', 'minimize'].map( (type) =>
								type && <ButtonControl key={type} button-type={type} onClick={ this.handlerButtonControlClick.bind(this, type) } />
							)
						}
					</Buttons>
				</Header>
				<Body>
					<Content id={ this.props.id } contentId={ this.props.contentId } state={contentState} />
				</Body>
			</Box>
		)
	}
}

let {
	Box,
	Header,
	Body,
	Buttons,
	ButtonControl,

	ResizeBorder,
} = require('./styles').children({
	Box: div("Window_Box"),
	Header: div("Window_Header"),
	Body: div("Window_Body"),
	Buttons: div("Window_Buttons"),
	ButtonControl: el("button", "Window_ButtonControl"),

	ResizeBorder: div("Window_ResizeBorder"),
})