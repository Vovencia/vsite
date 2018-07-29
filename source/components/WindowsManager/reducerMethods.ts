import {defaultWindowProps, windowStates, BoundsManager as WindowBoundsManager, IWindowInstanceProps} from "@components/Window";
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
			opened: windowMap(this.state.opened, this.action.windowId, (window: IWindowInstanceProps) => {
				return {
					...window,
					state: window.toState || windowStates.Normal
				}
			})
		})
	}
	hide(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window: IWindowInstanceProps) => {
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
			opened: windowMap(this.state.opened, this.action.windowId, (window: IWindowInstanceProps) => {
				window = {...window};
				window.state = window.state | windowStates.Closing;
				return window;
			})
		})
	}
	setPosition(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window: IWindowInstanceProps) => {
				let windowBoundsManager = new WindowBoundsManager(window);
				
				windowBoundsManager.setPosition(this.action.position);

				return {
					...window,
					...windowBoundsManager.getState(),
				}
			})
		})
	}
	setSize(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window: IWindowInstanceProps) => {
				let windowBoundsManager = new WindowBoundsManager(window);
				
				windowBoundsManager.setSize(this.action.size);

				return {
					...window,
					...this.action.size,
				}
			})
		})
	}
	setBounds(){
		this.setState({
			opened: windowMap(this.state.opened, this.action.windowId, (window: IWindowInstanceProps) => {
				let windowBoundsManager = new WindowBoundsManager(window);
				
				windowBoundsManager.setBounds(this.action.bounds);

				return {
					...window,
					...windowBoundsManager.getState(),
				}
			})
		})
	}
}