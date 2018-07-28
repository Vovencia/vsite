import * as _window from "./window";
import {reducer as loadingReducer} from "./loading";
import {reducer as taskbarUpdateReducer} from "./taskbar-update";

import {render} from "./render";
import {init} from "./init";
import {createStore} from "./store";

export {_window as window}

export function reducer(state, action){
	state = loadingReducer(state, action);
	state = taskbarUpdateReducer(state, action);
	return state;
}


export const store = createStore();
init(store);
render(store);