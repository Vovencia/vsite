import {actions as WindowsManagerActions} from "@components/WindowsManager";
import {ISize, IPosition, IPositionStrict, IBounds} from	"@interfaces";
import {positionToSize, sizeToPosition} from "@utils";

import {windowStates, windowPressState, windowBorderTypes} from "./interfaces";

import {documentAddClass, documentRemoveClass} from "@system";

export * from "./interfaces";
export * from "./methods";
export * from "./boundsManager";

import WindowRender from "./render";


class Window extends WindowRender {
	protected pressed = windowPressState.None;
	protected lastMousePosition: IPositionStrict;
	protected currentBorderType: string;

	constructor(props){
		super(props);
		this.handlerMouseMove = this.handlerMouseMove.bind(this);
		this.handlerMouseUp = this.handlerMouseUp.bind(this);
		this.handleGlobalClick = this.handleGlobalClick.bind(this);
	}
	checkSizeValue(value: number | string){
		if(typeof value == 'number') return value + 'px';
		return value;
	}
	componentDidMount(){
		if(this.props.state === windowStates.New){
			setTimeout(() => WindowsManagerActions.show(this.props.id), 10);
		}
		document.documentElement.addEventListener('click', this.handleGlobalClick);

		document.documentElement.addEventListener('mousemove', this.handlerMouseMove);
		document.documentElement.addEventListener('mouseup', this.handlerMouseUp);
	}
	componentWillUnmount(){
		document.documentElement.removeEventListener('click', this.handleGlobalClick);

		document.documentElement.removeEventListener('mousemove', this.handlerMouseMove);
		document.documentElement.removeEventListener('mouseup', this.handlerMouseUp);
	}
	handleGlobalClick(event: MouseEvent){
		if( !this.props.inFocus ) return;
		let parent = event.target as Element;
		do {
			if( parent == this.boxRef.current ) return;
		} while ( (parent = parent.parentElement) && parent instanceof Element );
		this.unfocus();
		
	}
	handlerOnPress(event){
		event.preventDefault();
		this.focus();
	}
	handlerHeaderOnPress(event){
		if( event.target != this.headerRef.current ) return;
		event.preventDefault();
		this.pressed = windowPressState.Header;

		documentAddClass('window__press--window-header');

		this.lastMousePosition = {
			x: event.clientX,
			y: event.clientY,
		}
	}
	handlerResizeBorderPress(direction: windowBorderTypes, event){
		event.preventDefault();
		this.pressed = windowPressState.Border;

		documentAddClass('window__press--window-header');

		this.lastMousePosition = {
			x: event.clientX,
			y: event.clientY,
		}
		this.currentBorderType = direction;
	}
	handlerMouseUp(){
		this.pressed = windowPressState.None;

		documentRemoveClass('window__press--window-header');
		documentRemoveClass('window__press--window-header');
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
				this.close();
			break;
			case 'maximize':
				this.setMaximize( !this.props.isMaximized );
			break;
		}
	}

	onHeaderMove(mouseMove: IPositionStrict){
		this.addPosition(mouseMove);
	}
	onBorderMove(mousePosition: IPositionStrict){
		let xPosition = 0;
		let yPosition = 0;

		switch(this.currentBorderType){
			case windowBorderTypes.Left:
				xPosition = 1;
			break;
			case windowBorderTypes.Right:
				xPosition = 2;
			break;
			case windowBorderTypes.Top:
				yPosition = 1;
			break;
			case windowBorderTypes.Bottom:
				yPosition = 2;
			break;
			case windowBorderTypes.LeftTop:
				xPosition = 1;
				yPosition = 1;
			break;
			case windowBorderTypes.LeftBottom:
				xPosition = 1;
				yPosition = 2;
			break;
			case windowBorderTypes.RightTop:
				xPosition = 2;
				yPosition = 1;
			break;
			case windowBorderTypes.RightBottom:
				xPosition = 2;
				yPosition = 2;
			break;
		}

		let bounds = {};
		if( xPosition ){ bounds['x' + xPosition] = mousePosition.x; }
		if( yPosition ){ bounds['y' + yPosition] = mousePosition.y; }
		this.setBounds(bounds);
	}

	setBounds(bounds: IBounds){
		WindowsManagerActions.setBounds(this.props.id, bounds);
	}

	getSize(){
		return {
			width: this.props.width,
			height: this.props.height,
		}
	}
	setSize(size: ISize){
		WindowsManagerActions.setSize(this.props.id, size);
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
		WindowsManagerActions.setPosition(this.props.id, {
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
	setMaximize(isMaximize: boolean){
		WindowsManagerActions.setMaximize(this.props.id, isMaximize);
	}
	setMinimize(isMinimize: boolean){
		WindowsManagerActions.setMinimize(this.props.id, isMinimize);
	}
	close(){
		WindowsManagerActions.close(this.props.id);
	}
	focus(){
		WindowsManagerActions.focus(this.props.id);
	}
	unfocus(){
		WindowsManagerActions.unfocus(this.props.id);
	}
}


let StyledWindow = require('./styles').self(Window);
export default StyledWindow;