import * as React from "react";
import "./index.styl";

interface ICursorState {
	mouseX: Number,
	mouseY: Number,
	cursor: String,
	mouseState: Object,
}

class Cursor extends React.Component<null, ICursorState> {
	constructor(props){
		super(props);
		this.handlerMouseMove 	= this.handlerMouseMove.bind(this);

		this.handlerMouseOver 	= this.handlerMouseOver.bind(this);
		this.handlerMouseOut 	= this.handlerMouseOut.bind(this);

		this.handlerMouseDown 	= this.handlerMouseDown.bind(this);
		this.handlerMouseUp 	= this.handlerMouseUp.bind(this);

		this.handlerDragStart 	= this.handlerDragStart.bind(this);
		this.handlerDragEnd 	= this.handlerDragEnd.bind(this);
		this.handlerDrag 	= this.handlerDrag.bind(this);

		this.state = {
			mouseX: -100,
			mouseY: -100,
			cursor: 'default',
			mouseState: {}
		}
	}
	render(){
		var attrs = {
			...this.props,
			'style': {left: this.state.mouseX + 'px', top: this.state.mouseY + 'px'},
			'data-cursor': this.state.cursor,
			'data-state': this.getMouseState(),
		};

		return (
			<div {...attrs} >
				<svg version="1.1" x="0px" y="0px" viewBox="-50 -50 563 563">
					<path d="M359.55,344.47,18.22,3.13A10.67,10.67,0,0,0,0,10.69V501.35a10.66,10.66,0,0,0,18.47,7.25L154,362.69H352a10.67,10.67,0,0,0,7.55-18.22Z"/>
				</svg>
			</div>
		);
	}
	componentDidMount(){
		document.addEventListener('mousemove', this.handlerMouseMove);
		window.addEventListener('drag' , this.handlerMouseMove);

		document.addEventListener('mouseover', this.handlerMouseOver);
		document.addEventListener('mouseout' , this.handlerMouseOut);

		window.addEventListener('mousedown' , this.handlerMouseDown);
		window.addEventListener('mouseup' , this.handlerMouseUp);
		window.addEventListener('dragend' , this.handlerMouseUp);

		window.addEventListener('dragstart' , this.handlerDragStart);
		window.addEventListener('dragend' , this.handlerDragEnd);
		window.addEventListener('drag' , this.handlerDrag);
	}
	componentWillUnmount(){
		document.removeEventListener('mousemove', this.handlerMouseMove);
		window.removeEventListener('drag' , this.handlerMouseMove);

		document.removeEventListener('mouseover', this.handlerMouseOver);
		document.removeEventListener('mouseout' , this.handlerMouseOut);

		window.removeEventListener('mousedown' , this.handlerMouseDown);
		window.removeEventListener('mouseup' , this.handlerMouseUp);
		window.removeEventListener('dragend' , this.handlerMouseUp);

		window.removeEventListener('dragstart' , this.handlerDragStart);
		window.removeEventListener('dragend' , this.handlerDragEnd);
		window.removeEventListener('drag' , this.handlerDrag);
	}
	handlerMouseOver(event){
		let targets = event.path;
		let cursor = "";

		for( let target of targets ){
			if(!target.computedStyleMap) continue;
			target.classList.add('get-cursor');
			let _cursor = target.computedStyleMap().get("cursor").value;
			target.classList.remove('get-cursor');
			switch (_cursor) {
				case 'none':
				case '':
					continue;
				default:
					cursor = _cursor;
			}
			break;
		}
		if( !cursor ) cursor = "default";

		this.setState({
			cursor: cursor,
		})
	}
	handlerMouseOut(event){
		// event.target.classList.remove('no-cursor');
	}
	handlerMouseMove(event){

		this.setState({
			mouseX: event.clientX,
			mouseY: event.clientY,
		})
	}
	handlerMouseDown(event){
		event.preventDefault();
		this.setState({
			mouseState: {...this.state.mouseState, active: true},
		})
	}
	handlerMouseUp(){
		this.setState({
			mouseState: {...this.state.mouseState, active: false},
		})
	}
	handlerDragStart(){
		this.setState({
			mouseState: {...this.state.mouseState, drag: true},
		})
	}
	handlerDragEnd(){
		this.setState({
			mouseState: {...this.state.mouseState, drag: false},
		})
	}
	handlerDrag(event){
	}
	getMouseState(): string{
		var result = [];
		for(var key in this.state.mouseState){
			if( this.state.mouseState[key] ){
				result.push(key);
			}
		}
		return result.join(" ");
	}
}

export default require("./style.ts")(Cursor);