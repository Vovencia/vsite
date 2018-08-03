import {stateLoad, stateRemove, stateSave} from "@utils";
import {ReactComponentWithEventEmmiter } from "./";

export interface IAliveReactComponentProps {
	componentId		?: string;
	id				?: string;
}

export class AliveReactComponent<P = {}, S = {}> extends ReactComponentWithEventEmmiter<P & IAliveReactComponentProps, S> {
	protected aliveReactComponentId: string;
	constructor(props, componentId?){
		super(props);
		this.aliveReactComponentId = componentId || this.props.componentId || ('AliveComponent.' + this.props.id);
		this.state = this.load(this.props);

		this.on('componentDidMount', this.save.bind(this));
		this.on('componentDidUpdate', this.save.bind(this));
		this.on('componentWillUnmount', this.unload.bind(this));
	}
	save(){
		if(!this.aliveReactComponentId) return;
		stateSave(this.aliveReactComponentId, this.state);
	}
	load(defaultState?){
		if(!this.aliveReactComponentId) return defaultState;
		return stateLoad(this.aliveReactComponentId, defaultState);
	}
	unload(){
		if(!this.aliveReactComponentId) return;
		stateRemove(this.aliveReactComponentId);
	}
}