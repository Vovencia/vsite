import * as React from "react";
import {stateLoad, stateRemove, stateSave} from "../../utils";

export interface IWindowContentProps {
	id: string;
	contentId: string;
}

export default class WindowContent<P, S> extends React.Component<IWindowContentProps & P, S> {
	private stateId: string;
	constructor(props){
		super(props)
		this.stateId = "Content:" + this.props.contentId + ':' + this.props.id;
		this.state = stateLoad(this.stateId);
	}
	componentDidUpdate(){
		stateSave(this.stateId, this.state);
	}
	componentDidMount(){
		stateSave(this.stateId, this.state);
	}
	componentWillUnmount(){
		stateRemove(this.stateId);
	}
}