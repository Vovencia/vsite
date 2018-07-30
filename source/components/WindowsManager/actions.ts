import {defaultWindowProps, IWindowInstanceProps, IWindowConstructorProps} from "@components/Window";
import {store} from "@system/index";
import {createAction, uid} from "@utils";
import {ISize, IPosition,IBounds} from	"@interfaces";

import {getList} from "./methods";

let _createAction = createAction.bind({}, "WindowsManager");

export {_createAction as createAction};
export function getActionName(name){
	return _createAction(name).type;
}

export let actions = {
	_load(){
		store.dispatch(_createAction("load"));
		actions.changed();
	},
	open(params: {options?: IWindowConstructorProps, content, callback?: (windowId: string) => void}) {
		store.dispatch(_createAction("open", {params}));
		actions.changed();
	},
	focus(windowId: string){
		store.dispatch(_createAction("focus", {windowId}));
		actions.changed();
	},
	unfocus(windowId: string){
		store.dispatch(_createAction("unfocus", {windowId}));
		actions.changed();
	},
	setPosition(windowId: string, position: IPosition){
		store.dispatch(_createAction("setPosition", {windowId, position}));
	},
	show(windowId: string){
		store.dispatch(_createAction("show", {windowId}));
		actions.changed();
	},
	hide(windowId: string){
		store.dispatch(_createAction("hide", {windowId}));
		actions.changed();
	},
	close(windowId){
		store.dispatch(_createAction("closing", {windowId}));
		actions.hide(windowId);
		setTimeout(function(){
			store.dispatch(_createAction("close", {windowId}));
		}, 300);
		actions.changed();
	},
	resize(windowId, size: ISize){
		store.dispatch(_createAction("setSize", {windowId, size}));
	},
	changed(){
		store.dispatch(_createAction("changed", {list: getList()}));
	},
	setBounds(windowId, bounds: IBounds){
		store.dispatch(_createAction("setBounds", {windowId, bounds}));
	},
	setSize(windowId, size: ISize){
		store.dispatch(_createAction("setSize", {windowId, size}));
	},
	setMaximize(windowId, isMaximize: boolean = true){
		store.dispatch(_createAction("setMaximize", {windowId, isMaximize}));
	},
	setMinimize(windowId, isMinimize: boolean = true){
		store.dispatch(_createAction("setMinimize", {windowId, isMinimize}));
	}
}