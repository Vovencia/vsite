import {defaultWindowProps, windowStates} from "@components/Window";
import {IWindowsManagerProps} from "./interfaces";
import {isFunction, checkAction, stateLoad, stateSave} from "@utils";
import {windowFocus, windowMap} from "./methods";

export class ReducerMethods {
	protected state: any = {};
	protected action: any = {};

	constructor(state, action){
		this.state = state;
		this.action = action;
	}
	call(method, state = {}, action) {
		if(!(typeof this[method] == 'function')) return;
		this[method]();
	}
	getState(){
		return this.state;
	}
	setState(obj){
		this.state = {
			...this.state,
			...obj,
		}
		stateSave("WindowsManager", this.state);
	}
	open(){
		this.setState({
			opened: this.state.opened.concat({
				...defaultWindowProps,
				...this.action.options,
				content: this.action.content,
			})
		})
		if( isFunction(this.action.callback) ){
			this.action.callback(this.action.id);
		}
	}
	load(){
		this.setState(stateLoad<IWindowsManagerProps>("WindowsManager", {
			opened: []
		}));
	}
	focus(){
		this.setState({
			opened: windowFocus(this.state.opened, this.action.windowId),
		})
	}
	show(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window) => {
				return {
					...window,
					state: window.toState || windowStates.Normal
				}
			})
		})
	}
	hide(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window) => {
				return {
					...window,
					state: window.state | windowStates.Minimized
				}
			})
		})
	}
	close(){
		this.setState({
			opened: this.state.opened.filter( window => window.id !== this.action.windowId )
		})
	}
	closing(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window) => {
				window = {...window};
				window.state = window.state | windowStates.Closing;
				return window;
			})
		})
	}
	move(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window) => {
				return {
					...window,
					...this.action.position,
				}
			})
		})
	}
	resize(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window) => {
				return {
					...window,
					...this.action.size,
				}
			})
		})
	}
}