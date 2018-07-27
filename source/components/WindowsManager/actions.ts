import {store} from "../../index";
import {createAction} from "../../utils";
let _createAction = createAction.bind({}, "WindowsManager");
import {windowCalcState} from "./methods";

export let actions = {
	_load(){
		store.dispatch(_createAction("load"));
	},
	open(props: {options?: {}, content, callback?}) {
		props.options = {
			...props.options,
			...windowCalcState(props.options),
		}
		console.log('props', props)
		throw 1;
		store.dispatch(_createAction("open", props));
	},
	focus(windowId: string){
		store.dispatch(_createAction("focus", {windowId}));
	},
	move(windowId: string, position: {x: number, y: number}){
		store.dispatch(_createAction("move", {windowId, position}));
	},
	show(windowId: string){
		store.dispatch(_createAction("show", {windowId}));
	},
	hide(windowId: string){
		store.dispatch(_createAction("hide", {windowId}));
	},
	close(windowId){
		actions.hide(windowId);
		setTimeout(function(){
			store.dispatch(_createAction("close", {windowId}));
		}, 300);
	}
}