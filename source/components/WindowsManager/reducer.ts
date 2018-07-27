import {defaultWindowProps, windowState} from "../Window";
import {checkAction, uid, stateLoad, stateSave} from "../../utils";
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
			var _uid = uid()
			state.opened = state.opened.concat({
				...defaultWindowProps,

				id: _uid,

				...action.options,
				content: action.content,
			});
			action.callback(_uid);
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
					state: window.toState || windowState.Normal
				}
			})
		break;
		case 'hide':
			state.opened = windowMap(state.opened, action.windowId, function(window){
				return {
					...window,
					state: windowState.Minimized
				}
			})
		break;
		case 'close':
			state.opened = state.opened.filter( window => window.id !== action.windowId );
		break;
		case 'move':
			state.opened = windowMap(state.opened, action.windowId, function(window){
				return {
					...window,
					...action.position,
				}
			})
		break;
	}

	stateSave("WindowsManager", state);

	return state;
}