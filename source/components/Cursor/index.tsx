import * as React from "react";
import "./index.styl";
import * as fs from "fs";

interface ICursorState {
	mouseX: Number,
	mouseY: Number,
	cursor: String,
	mouseState: Object,
}

class Cursor extends React.Component<null, ICursorState> {
	private cursors = require('!svg-inline-loader!@assets/images/cursors/cursors.svg');

	constructor(props){
		super(props);
		this.checkCursor 	= this.checkCursor.bind(this);

		this.handlerMouseMove 	= this.handlerMouseMove.bind(this);

		this.handlerMouseOut 	= this.handlerMouseOut.bind(this);

		this.handlerMouseDown 	= this.handlerMouseDown.bind(this);
		this.handlerMouseUp 	= this.handlerMouseUp.bind(this);

		this.handlerDragStart 	= this.handlerDragStart.bind(this);
		this.handlerDragEnd 	= this.handlerDragEnd.bind(this);
		this.handlerDrag 	= this.handlerDrag.bind(this);

		this.state = {
			mouseX: null,
			mouseY: null,
			cursor: 'default',
			mouseState: {}
		}
	}
	render(){
		let styles:CSSStyleDeclaration = {} as CSSStyleDeclaration;
		

		if( this.state.mouseX != null ){
			styles.left = this.state.mouseX + 'px';
		}
		if( this.state.mouseY != null ){
			styles.top = this.state.mouseY + 'px';
		}

		var attrs = {
			...this.props,
			'style': styles as object,
			'data-cursor': this.state.cursor,
			'data-state': this.getMouseState(),

			dangerouslySetInnerHTML: {
				__html: this.cursors
			}
		};

		// const cursorSvg = fs.readFileSync( require('@assets/images/cursors/cursors.svg') )

		return (
			<div {...attrs} ></div>
		);
	}
	componentDidMount(){
		document.addEventListener('mouseover', this.checkCursor);
		document.addEventListener('mousedown', this.checkCursor);
		document.addEventListener('mouseup', this.checkCursor);

		document.addEventListener('mousemove', this.handlerMouseMove);
		window.addEventListener('drag' , this.handlerMouseMove);

		document.addEventListener('mouseout' , this.handlerMouseOut);

		window.addEventListener('mousedown' , this.handlerMouseDown);
		window.addEventListener('mouseup' , this.handlerMouseUp);
		window.addEventListener('dragend' , this.handlerMouseUp);

		window.addEventListener('dragstart' , this.handlerDragStart);
		window.addEventListener('dragend' , this.handlerDragEnd);
		window.addEventListener('drag' , this.handlerDrag);
	}
	componentWillUnmount(){
		document.removeEventListener('mouseover', this.checkCursor);
		document.removeEventListener('mousedown', this.checkCursor);
		document.removeEventListener('mouseup', this.checkCursor);

		document.removeEventListener('mousemove', this.handlerMouseMove);
		window.removeEventListener('drag' , this.handlerMouseMove);

		document.removeEventListener('mouseout' , this.handlerMouseOut);

		window.removeEventListener('mousedown' , this.handlerMouseDown);
		window.removeEventListener('mouseup' , this.handlerMouseUp);
		window.removeEventListener('dragend' , this.handlerMouseUp);

		window.removeEventListener('dragstart' , this.handlerDragStart);
		window.removeEventListener('dragend' , this.handlerDragEnd);
		window.removeEventListener('drag' , this.handlerDrag);
	}
	checkCursor(event){
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