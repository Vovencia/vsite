import {defaultWindowProps, IWindowInstanceProps, IWindowConstructorProps} from "@components/Window";
import {store} from "@system/index";
import {createAction, uid} from "@utils";
import {ISize, IPosition,IBounds} from	"@interfaces";

import {windowCalcState, getList} from "./methods";

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
	open(props: {options?: IWindowConstructorProps, content, callback?}) {
		var options: IWindowInstanceProps = {
			...defaultWindowProps,
			id: uid(),
			...props.options,
		};
		options = {
			...options,
			...windowCalcState(options),
		}
		props.options = options;
		store.dispatch(_createAction("open", props));
		actions.focus( options.id );
		actions.changed();
	},
	focus(windowId: string){
		store.dispatch(_createAction("focus", {windowId}));
	},
	move(windowId: string, position: IPosition){
		store.dispatch(_createAction("move", {windowId, position}));
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
		store.dispatch(_createAction("resize", {windowId, size}));
	},
	changed(){
		store.dispatch(_createAction("changed", {list: getList()}));
	},
	setBounds(bounds: IBounds){
		store.dispatch(_createAction("setBounds", {bounds}));
	}
}