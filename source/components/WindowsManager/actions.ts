import {defaultWindowProps, IWindowInstanceProps, IWindowConstructorProps} from "@components/Window";
import {store} from "@system/index";
import {createAction, uid} from "@utils";
import {ISize, IPosition,IBounds} from	"@interfaces";

import {windowCalcState, getList, constructorOptions} from "./methods";

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
		params = {...params};

		let windowProps:IWindowConstructorProps = constructorOptions(params.options);
		params.options = windowProps;
		store.dispatch(_createAction("open", params));
		actions.focus( windowProps.id );
		actions.changed();
	},
	focus(windowId: string){
		store.dispatch(_createAction("focus", {windowId}));
	},
	setPosition(windowId: string, position: IPosition){
		store.dispatch(_createAction("setPosition", {windowId, position}));
	},
	show(windowId: string){
		store.dispatch(_createAction("show", {windowId}));
	},
	hide(windowId: string){
		store.dispatch(_createAction("hide", {windowId}));
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
	}
}