import * as React from "react";
import {connect} from "react-redux";

import * as contentStore from "@system/contentStore";
import Window, {defaultWindowProps, IWindowInstanceProps} from "@components/Window";

import {IWindowsManagerProps, IWindowsManagerDispatchProps} from "./interfaces";


import {actions, getActionName} from "./actions";
export {actions, getActionName};
import {reducer} from "./reducer";
export {reducer};

class WindowsManager extends React.Component<IWindowsManagerProps & IWindowsManagerDispatchProps> {
	render(){
		return (
			<React.Fragment>
				{ this.props.opened.map(this.renderWindow.bind(this)) }
			</React.Fragment>
		);
	}
	renderWindow(window: IWindowInstanceProps){
		const props = this.getWindowProps(window);
		return (<Window {...props} />);
	}
	componentDidMount(){
		actions._load();
	}
	getWindowProps(window: IWindowInstanceProps): IWindowInstanceProps & React.ReactNode {
		let props:IWindowInstanceProps & React.ReactNode = {
			...window,
			key: window.id,

			...this.getWindowSize(window),
			...this.getWindowContent(window),
		}
		return props;
	}
	getWindowSize(window){
		if( window.isMaximized ){
			return {
				x: this.props.Layout.content.x,
				y: this.props.Layout.content.y,
				width: this.props.Layout.content.width,
				height: this.props.Layout.content.height,
			}
		}
	}
	getWindowContent(window): {contentId: string, content: any}{
		const contentId = window.appInfo.uid + '.' + window.id;
		return {
			contentId,
			content: contentStore.getContent(window.content),
		}
	}
}


var ConnectedWindowsManager = connect<IWindowsManagerProps, IWindowsManagerDispatchProps, any>(function mapStateToProps(state: any, ownProps){
	return {
		...state.WindowsManager,
		Layout: state.Layout,
	};
}, function mapDispatchToProps(dispatch, getState): IWindowsManagerDispatchProps{
	return {};
})(WindowsManager);

export default ConnectedWindowsManager;