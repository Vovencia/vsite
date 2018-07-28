import {windowStates, IPropsInstance, IProps} from "./interfaces";

export function isState(windowProps: IPropsInstance, needState: windowStates){
	var state = windowProps.state;
	// if( windowProps.state == windowStates.New ){
	// 	state = windowProps.toState;
	// }
	return !!(state & needState);
}

export function isNormal(windowProps: IPropsInstance){
	return isState(windowProps, windowStates.Normal);
}
export function isMaximized(windowProps: IPropsInstance){
	return isState(windowProps, windowStates.Maximized);
}
export function isMinimized(windowProps: IPropsInstance){
	return isState(windowProps, windowStates.Minimized);
}
export function isClosing(windowProps: IPropsInstance){
	return isState(windowProps, windowStates.Closing);
}

export function isVisible(windowProps: IPropsInstance){
	return isState(windowProps, windowStates.isVisible) && !isMinimized(windowProps);
}

export function isOpened(windowProps: IPropsInstance){
	return isState(windowProps, windowStates.isOpened) && !isClosing(windowProps);
}