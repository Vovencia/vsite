import {getContentState} from "@system/window"
import {isMaximized, isOpened} from "@components/Window/methods"
import {defaultWindowConstructorProps, IWindowConstructorPropsStrict, IWindowConstructorProps} from "@components/Window/interfaces";
import {round, uid} from "@utils";
import {ISizeAny, IPositionAny, ISizeStrict, IPositionStrict, IPositionRelativeX, IPositionRelativeY, Percent} from	"@interfaces";
import {store} from "@system/index";

export function windowFocus(list, windowId, setFocus = true){
	var focusWindow;
	list = list.filter(function(window) {
		if( setFocus && window.id === windowId ){
			focusWindow = window;
			window.inFocus = setFocus;
			return false;
		}
		window.inFocus = false;
		return true;
	});
	if(focusWindow) list.push(focusWindow);
	return list;
}
export function windowMap(list, windowId, handler){
	return list.map(function(window){
		if( window.id != windowId ) return window;
		return handler(window);
	})
}

var isPercent 	= /[0-9.]+\%/;

function parsePercent(val){
	return (parseFloat(val) || 0)/100;
}

function _windowCalcState(keyPosition, keySize, windowProps, contentProps) {
	var result = {};

	var windowSize = windowCalcStateSize(keySize, windowProps, contentProps);
	var windowPosition = windowProps[keyPosition];

	var contentSize = contentProps[keySize];

	switch(windowPosition){
		case 'center'	:
		case 'middle'	:
		case IPositionRelativeX.center:
		case IPositionRelativeY.center:
		case IPositionRelativeX.middle:
		case IPositionRelativeY.middle:
			windowPosition = '50%';
		break;
		case IPositionRelativeX.left:
		case IPositionRelativeY.top:
			windowPosition = '0%';
		break;
		case IPositionRelativeX.right:
		case IPositionRelativeY.bottom:
			windowPosition = '100%';
		break;
	}

	if( isPercent.test(windowPosition) || windowPosition instanceof Percent ){
		windowPosition = parsePercent( windowPosition.toString() )*(contentSize - windowSize) || 0;
	} else {
		windowPosition = parseFloat(windowPosition) || 0;
	}

	windowPosition += contentProps[keyPosition];
	result[keySize] = round(windowSize, 3);
	result[keyPosition] = round(windowPosition, 3);

	return result;
}
function windowCalcStateSize(keySize, windowProps, contentProps) {
	if( isPercent.test(windowProps[keySize]) ){
		return parsePercent(windowProps[keySize])*contentProps[keySize];
	}
	return parseFloat(windowProps[keySize]) || 0;
}

export function windowCalcState(windowProps: ISizeAny & IPositionAny ) : ISizeStrict & IPositionStrict {
	var contentState = getContentState();

	var result = {
		width: 0,
		height: 0,
		x: 0,
		y: 0,
	}

	result = {
		...result,
		..._windowCalcState('x', 'width', windowProps, contentState),
		..._windowCalcState('y', 'height', windowProps, contentState),
	}

	return result;
}

export function getList(){
	return store.getState().WindowsManager.opened.filter( window => isOpened(window) );
}

export function constructorOptions(options: IWindowConstructorProps): IWindowConstructorPropsStrict {
	return {
		...defaultWindowConstructorProps,
		id: uid(),
		...options,
		...windowCalcState(options),
	}
}

export function getWindowMaximizedSize(): ISizeStrict {
	var contentState = getContentState();
	return {
		width: contentState.width,
		height: contentState.height,
	}
}