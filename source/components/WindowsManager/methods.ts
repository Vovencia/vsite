import {getContentState} from "@system/window";
import {isMaximized, isOpened} from "@components/Window/index"
import {round} from "@utils";
import {ISize, IPosition} from	"@interfaces";
import {store} from "@system/index";

export function windowFocus(list, windowId){
	var focusWindow;
	list = list.filter(function(window) {
		if( window.id === windowId ){
			focusWindow = window;
			window.inFocus = true;
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
	if( isMaximized(windowProps) ){
		result[keyPosition] = contentProps[keyPosition];
		result[keySize] = contentProps[keySize];
		return result;
	}

	var windowSize = windowClasStateSize(keySize, windowProps, contentProps);
	var windowPosition = windowProps[keyPosition];

	var contentSize = contentProps[keySize];

	switch(windowPosition){
		case 'center'	:
			windowPosition = '50%';
		break;
		case 'left'		:
		case 'top'		:
			windowPosition = '0%';
		break;
		case 'right'	:
		case 'bottom'	:
			windowPosition = '100%';
		break;
	}

	if( isPercent.test(windowPosition) ){
		windowPosition = parsePercent( windowPosition )*(contentSize - windowSize) || 0;
	} else {
		windowPosition = parseFloat(windowPosition) || 0;
	}

	windowPosition += contentProps[keyPosition];
	result[keySize] = round(windowSize, 3);
	result[keyPosition] = round(windowPosition, 3);

	return result;
}
function windowClasStateSize(keySize, windowProps, contentProps) {
	if( isPercent.test(windowProps[keySize]) ){
		return parsePercent(windowProps[keySize])*contentProps[keySize];
	}
	return parseFloat(windowProps[keySize]) || 0;
}

export function windowCalcState(windowProps:
	{ width?: any, height?: any, x?: any, y?: any}
) : ISize & IPosition {
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