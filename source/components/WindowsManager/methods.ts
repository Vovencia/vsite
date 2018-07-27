import {getContentState} from "../../system/window";

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

function windowCalcStateProp(values, key, contentState) {

}

export function windowCalcState(windowProps:
	{ width?: any, height?: any, x?: any, y?: any}
) : { width?: number, height?: number, x?: number, y?: number } {
	var contentState = getContentState();
	console.log('content', getContentState());
	console.log('windowProps', windowProps);

	var result = {
		width: 0,
		height: 0,
		x: 0,
		y: 0,
	}
	
	windowProps.width = windowCalcStateProp(windowProps.width, 'width', contentState);

	if( typeof windowProps.width == 'number' ) result.width = windowProps.width;
	

	return result;
}