import {defaultWindowProps, windowStates} from "../Window";
import {checkAction, stateLoad, stateSave} from "../../utils";
import {IWindowsManagerProps} from "./interfaces";
import {windowFocus, windowMap} from "./methods";

export function reducer(state: IWindowsManagerProps = {
	opened: []
}, action){
	var type = "";
	if(!(type = checkAction("WindowsManager", action))) return state;

	switch(type){
		case 'open':
			state = {...state};
			state.opened = state.opened.concat({
				...defaultWindowProps,
				...action.options,
				content: action.content,
			});
			action.callback(action.id);
		break;
		case 'load':
			state = stateLoad<IWindowsManagerProps>("WindowsManager", {
				opened: []
			});
		break;
		case 'focus':
			state.opened = windowFocus(state.opened, action.windowId);
		break;
		case 'show':
			state.opened = windowMap(state.opened, action.windowId, function(window){
				return {
					...window,
					state: window.toState || windowStates.Normal
				}
			})
		break;
		case 'hide':
			state.opened = windowMap(state.opened, action.windowId, function(window){
				return {
					...window,
					state: window.state | windowStates.Minimized
				}
			})
		break;
		case 'close':
			state.opened = state.opened.filter( window => window.id !== action.windowId );
		break;
		case 'closing':
			state.opened = windowMap(state.opened, action.windowId, function(window){
				window = {...window};
				window.state = window.state | windowStates.Closing;
				return window;
			});
		break;
		case 'move':
			state.opened = windowMap(state.opened, action.windowId, function(window){
				return {
					...window,
					...action.position,
				}
			})
		break;
		case 'resize':
			state.opened = windowMap(state.opened, action.windowId, function(window){
				return {
					...window,
					...action.size,
				}
			})
		break;
	}

	stateSave("WindowsManager", state);

	return state;
}