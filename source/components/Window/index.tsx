import {actions as WindowsManagerActions} from "@components/WindowsManager";
import {ISize, IPosition} from	"@interfaces";
import {positionToSize, sizeToPosition} from "@utils";

import {windowStates, windowPressState, windowBorderTypes} from "./interfaces";

export * from "./interfaces";
export * from "./methods";
export * from "./manager";

import WindowRender from "./render";


class Window extends WindowRender {
	protected pressed = windowPressState.None;
	protected lastMousePosition: IPosition;
	protected currentBorderType: string;

	constructor(props){
		super(props);
		this.handlerMouseMove = this.handlerMouseMove.bind(this);
		this.handlerMouseUp = this.handlerMouseUp.bind(this);
	}
	checkSizeValue(value: number | string){
		if(typeof value == 'number') return value + 'px';
		return value;
	}
	componentDidMount(){
		if(this.props.state === windowStates.New){
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
		this.pressed = windowPressState.Header;
		this.lastMousePosition = {
			x: event.clientX,
			y: event.clientY,
		}
	}
	handlerResizeBorderPress(direction: windowBorderTypes, event){
		event.preventDefault();
		this.pressed = windowPressState.Border;
		this.lastMousePosition = {
			x: event.clientX,
			y: event.clientY,
		}
		this.currentBorderType = direction;
	}
	handlerMouseUp(){
		this.pressed = windowPressState.None;
	}
	handlerMouseMove(event){
		if(this.pressed == windowPressState.None) return;

		const mouseMove = {
			x: event.clientX - this.lastMousePosition.x,
			y: event.clientY - this.lastMousePosition.y,
		}
		
		this.lastMousePosition = {
			x: event.clientX,
			y: event.clientY,
		}

		switch(this.pressed){
			case windowPressState.Header:
				this.onHeaderMove(mouseMove);
			break;
			case windowPressState.Border:
				this.onBorderMove(this.lastMousePosition);
			break;
		}
	}
	handlerButtonControlClick(type, event){
		event.preventDefault();
		switch(type){
			case 'close':
				WindowsManagerActions.close(this.props.id);
			break;
		}
	}

	onHeaderMove(mouseMove: IPosition){
		this.addPosition(mouseMove);
	}
	onBorderMove(mousePosition: IPosition){
		var size = this.getSize();
		var position = this.getPosition();

		var bounds = {
			x1: position.x,
			y1: position.y,
			x2: position.x + size.width,
			y2: position.y + size.height,
		}

		var changed = {x: 0, y: 0}

		switch(this.currentBorderType){
			case windowBorderTypes.Left:
				bounds.x1 = mousePosition.x;
				changed['x'] = 1;
			break;
			case windowBorderTypes.Right:
				bounds.x2 = mousePosition.x;
				changed['x'] = 2;
			break;
			case windowBorderTypes.Top:
				bounds.y1 = mousePosition.y;
				changed['y'] = 1;
			break;
			case windowBorderTypes.Bottom:
				bounds.y2 = mousePosition.y;
				changed['y'] = 2;
			break;
			case windowBorderTypes.LeftTop:
				bounds.x1 = mousePosition.x;
				bounds.y1 = mousePosition.y;
				changed['x'] = 1;
				changed['y'] = 1;
			break;
			case windowBorderTypes.LeftBottom:
				bounds.x1 = mousePosition.x;
				bounds.y2 = mousePosition.y;
				changed['x'] = 1;
				changed['y'] = 2;
			break;
			case windowBorderTypes.RightTop:
				bounds.x2 = mousePosition.x;
				bounds.y1 = mousePosition.y;
				changed['x'] = 2;
				changed['y'] = 1;
			break;
			case windowBorderTypes.RightBottom:
				bounds.x2 = mousePosition.x;
				bounds.y2 = mousePosition.y;
				changed['x'] = 2;
				changed['y'] = 2;
			break;
		}

		var minSize = sizeToPosition(this.getMinSize());

		;['x', 'y'].forEach(function(direction){
			if( changed[direction] ){
				bounds[direction + changed[direction]] = mousePosition[direction];
				if( (bounds[direction + 2] - bounds[direction + 1]) < minSize[direction] ){
					bounds[direction + changed[direction]] = (
						changed[direction] == 1 ?
						bounds[direction + 2] - minSize[direction] :
						bounds[direction + 1] + minSize[direction]
					)
				}
			}
		});



		position = {
			x: bounds.x1,
			y: bounds.y1,
		}
		size = {
			width: bounds.x2 - bounds.x1,
			height: bounds.y2 - bounds.y1,
		}

		this.setSize(size);
		this.setPosition(position);
	}

	getMinSize(){
		return {
			width: ( this.props.minWidth > 50 ? this.props.minWidth : 50 ),
			height: ( this.props.minHeight > 50 ? this.props.minHeight : 50 ),
		}
	}
	getMaxSize(){
		return {
			width: this.props.maxWidth,
			height: this.props.maxHeight,
		}
	}

	checkSize(_size: ISize){
		var size = {..._size};
		var minSize = this.getMinSize();

		if(size.width < minSize.width) size.width = minSize.width;
		if(size.height < minSize.height) size.height = minSize.height;

		return size;
	}

	getSize(){
		return {
			width: this.props.width,
			height: this.props.height,
		}
	}
	setSize(size: ISize){
		size = this.checkSize(size);
		WindowsManagerActions.resize(this.props.id, size);
	}
	addSize(addSize: ISize){
		let size = this.getSize();
		if(addSize.width) size.width += addSize.width;
		if(addSize.height) size.height += addSize.height;
		this.setSize(size);
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
		if(addPosition.x) position.x += addPosition.x;
		if(addPosition.y) position.y += addPosition.y;
		this.setPosition(position);
	}
}


let StyledWindow = require('./styles')(Window);
export default StyledWindow;