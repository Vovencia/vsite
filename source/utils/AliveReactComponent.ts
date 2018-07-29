import {stateLoad, stateRemove, stateSave} from "@utils";
import {ReactComponentWithEventEmmiter } from "./";
// import {connect} from "react-redux";

export interface IAliveReactComponentProps {
	componentId		?: string;
	id				?: string;
}

export class AliveReactComponent<P = {}, S = {}> extends ReactComponentWithEventEmmiter<P & IAliveReactComponentProps, S> {
	protected componentId: string;
	constructor(props, componentId?){
		super(props);
		this.componentId = componentId || this.props.componentId || ('AliveComponent.' + this.props.id);
		this.state = this.load(this.props);

		this.on('componentDidMount', this.save.bind(this));
		this.on('componentDidUpdate', this.save.bind(this));
		this.on('componentWillUnmount', this.unload.bind(this));
	}
	save(){
		if(!this.componentId) return;
		stateSave(this.componentId, this.state);
	}
	load(defaultState?){
		if(!this.componentId) return defaultState;
		return stateLoad(this.componentId, defaultState);
	}
	unload(){
		if(!this.componentId) return;
		stateRemove(this.componentId);
	}
}

// const ConnectedAliveReactComponent = connect(function mapStateToProps(){

// }, function mapDispatchToProps(dispatch){

// })(AliveReactComponent);