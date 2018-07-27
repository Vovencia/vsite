import * as React from "react";
import {connect} from "react-redux";

import {actions as WindowsManagerActions} from "../WindowsManager";
import {div, el} from "../../utils";

export enum windowState {
	New 		= "NEW",
	Minimized 	= "MINIMIZED",
	Normal 		= "NORMAL",
	Maximized 	= "MAXIMIZED",
}

export interface IPropsInstance {
	inFocus			: boolean;
	x				: number;
	y				: number;
	width			: number;
	height			: number;
	state			: windowState;
	toState			: windowState;
}

export interface IProps extends IPropsInstance {
	id				: any;
	content			: React.ComponentType;
}

export const defaultWindowProps:IPropsInstance = {
	x				: 100,
	y				: 100,
	width			: 400,
	height			: 400,
	inFocus			: false,
	state			: windowState.New,
	toState			: windowState.Normal,
}

class Window extends React.Component<IProps & React.HTMLAttributes<HTMLDivElement>> {
	private boxRef = React.createRef<HTMLDivElement>();
	private headerRef = React.createRef<HTMLDivElement>();
	private pressed = false;
	private lastMousePosition: {x: number, y: number}

	constructor(props){
		super(props);
		this.handlerMouseMove = this.handlerMouseMove.bind(this);
		this.handlerMouseUp = this.handlerMouseUp.bind(this);
	}
	render(){
		const Content = this.props.content;

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
				style-isVisible={ (this.props.state === windowState.Normal || this.props.state === windowState.Maximized) }
				style-inFocus={ this.props.inFocus }
				className={this.props.className}
				onMouseDown={ this.handlerOnPress.bind(this) }
			>
				<Header
					elementRef	={ this.headerRef }

					onMouseDown	={ this.handlerHeaderOnPress.bind(this) }
				>
					<Buttons>
						<ButtonClose onClick={ this.handlerButtonCloseClick.bind(this) } />
						<ButtonMinimize />
					</Buttons>
				</Header>
				<Body>
					<Content />
				</Body>
			</Box>
		)
	}
	checkSizeValue(value: number | string){
		if(typeof value == 'number') return value + 'px';
		return value;
	}
	getSize(){
		var width = this.props.width;
		var height = this.props.height;
	}
	componentDidMount(){
		if(this.props.state === windowState.New){
			setTimeout(() => WindowsManagerActions.show(this.props.id), 10);
		}
		document.documentElement.addEventListener('mousemove', this.handlerMouseMove);
		document.documentElement.addEventListener('mouseup', this.handlerMouseUp);
	}
	componentWillUnmount(){
		document.documentElement.removeEventListener('mousemove', this.handlerMouseMove);
		document.documentElement.removeEventListener('mouseup', this.handlerMouseUp);
	}
	handlerOnPress(event){
		event.preventDefault();
		WindowsManagerActions.focus(this.props.id);
	}
	handlerHeaderOnPress(event){
		if( event.target != this.headerRef.current ) return;
		event.preventDefault();
		this.pressed = true;
		this.lastMousePosition = {
			x: event.clientX,
			y: event.clientY,
		}
	}
	handlerMouseUp(){
		this.pressed = false;
	}
	handlerMouseMove(event){
		if(!this.pressed) return;
		const mouseMove = {
			x: event.clientX - this.lastMousePosition.x,
			y: event.clientY - this.lastMousePosition.y,
		}
		
		this.lastMousePosition = {
			x: event.clientX,
			y: event.clientY,
		}
		this.addPosition(mouseMove);
	}
	handlerButtonCloseClick(event){
		event.preventDefault();
		WindowsManagerActions.close(this.props.id);
	}
	getPosition(){
		let position = {
			x: this.props.x || 0,
			y: this.props.y || 0,
		}
		return position;
	}
	setPosition(position){
		WindowsManagerActions.move(this.props.id, {
			x: position.x,
			y: position.y,
		});
	}
	addPosition(addPosition){
		let position = this.getPosition();
		position.x += addPosition.x;
		position.y += addPosition.y;
		this.setPosition(position);
	}
}

let {
	Self: StyledWindow,
	Box,
	Header,
	Body,
	Buttons,
	ButtonClose,
	ButtonMinimize,
} = require('./styles')(Window, {
	Box: div("Window_Box"),
	Header: div("Window_Header"),
	Body: div("Window_Body"),
	Buttons: div("Window_Buttons"),
	ButtonClose: el("button", "Window_ButtonClose"),
	ButtonMinimize: el("button", "Window_ButtonMinimize"),
})


export default StyledWindow;