import {defaultWindowProps, IPropsNoStrict, IPropsInstanceNoStrict} from "../Window";
import {store} from "../../index";
import {createAction, uid} from "../../utils";
let _createAction = createAction.bind({}, "WindowsManager");
import {windowCalcState, getList} from "./methods";

import {ISize, IPosition} from	"../../interfaces";

export {_createAction as createAction};
export function getActionName(name){
	return _createAction(name).type;
}

export let actions = {
	_load(){
		store.dispatch(_createAction("load"));
		actions.countChanged();
	},
	open(props: {options?: IPropsInstanceNoStrict, content, callback?}) {
		var options: IPropsNoStrict = {
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
		actions.countChanged();
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
		actions.countChanged();
	},
	resize(windowId, size: ISize){
		store.dispatch(_createAction("resize", {windowId, size}));
	},
	countChanged(){
		store.dispatch(_createAction("countChanged", {list: getList()}));
	}
}