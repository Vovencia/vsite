import {windowStates, IWindowInstanceProps} from "@components/Window/interfaces";

export function isState(windowProps: IWindowInstanceProps, needState: windowStates){
	var state = windowProps.state;
	// if( windowProps.state == windowStates.New ){
	// 	state = windowProps.toState;
	// }
	return !!(state & needState);
}

export function isNormal(windowProps: IWindowInstanceProps){
	return isState(windowProps, windowStates.Normal);
}
export function isMaximized(windowProps: IWindowInstanceProps){
	return isState(windowProps, windowStates.Maximized);
}
export function isMinimized(windowProps: IWindowInstanceProps){
	return isState(windowProps, windowStates.Minimized);
}
export function isClosing(windowProps: IWindowInstanceProps){
	return isState(windowProps, windowStates.Closing);
}

export function isVisible(windowProps: IWindowInstanceProps){
	return isState(windowProps, windowStates.isVisible) && !isMinimized(windowProps);
}

export function isOpened(windowProps: IWindowInstanceProps){
	return isState(windowProps, windowStates.isOpened) && !isClosing(windowProps);
}