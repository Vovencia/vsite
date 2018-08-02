import {createStore} from "redux";

import {reducersManager} from "./reducersManager";
export {reducersManager};

import * as _window from "./window";

import {reducer as loadingReducer} from "./loading";
import {reducer as taskbarUpdateReducer} from "./taskbar-update";

import {init} from "./init";

export {_window as window}

export * from "./methods";

reducersManager.addReducer(loadingReducer);
reducersManager.addReducer(taskbarUpdateReducer);

export const store = createStore(reducersManager.getMainReducer());

Object.assign(window, {
	__store: store,
})

init(store);

import {render} from "./render";
render(store);

declare let _App: Array<string>;

export function getApp(appId) {
	console.log(appId);
}

export function getState(){
	if( reducersManager.isInReducer() ){
		return reducersManager.getGlobalState();
	}
	return store.getState();
}

import {layoutRef} from "@components/Layout";
export function getDocumentRef(){
	return layoutRef;
}