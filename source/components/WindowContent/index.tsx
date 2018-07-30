import * as React from "react";
import {AliveReactComponent} from "@utils";

export interface IWindowContentProps {
	windowId		: string;
	contentId		: string;
	contentState	: object;
}


export default class WindowContent<P, S> extends AliveReactComponent<IWindowContentProps & P, S> {
	protected id: string;
	protected windowId: string;

	constructor(props){
		super(props, "Content:" + props.contentId);
		this.componentId = '';
		this.id = "Content:" + this.props.contentId;
		this.windowId = this.props.windowId;
	}
}