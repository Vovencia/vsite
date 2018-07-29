import {checkAction} from "@utils";
import {IWindowsManagerProps} from "./interfaces";
import {ReducerMethods} from "./reducerMethods";

export function reducer(state: IWindowsManagerProps = {
	opened: []
}, action){
	var type = "";
	if(!(type = checkAction("WindowsManager", action))) return state;

	const reducer = new ReducerMethods(state, action);

	reducer.call(type, state, action);

	return reducer.getState();
}