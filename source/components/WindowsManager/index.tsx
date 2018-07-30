import * as React from "react";
import {connect} from "react-redux";
import {getWindowContent} from "@utils";
import {actions, getActionName} from "./actions";
export {actions, getActionName};

import Window, {defaultWindowProps, IWindowInstanceProps} from "@components/Window";
import {IWindowsManagerProps, IWindowsManagerDispatchProps} from "./interfaces";
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
		let props = {
			...window,
			key: window.id,
			...getWindowContent(window),
		}
		console.log('getWindowProps', props)
		return props;
	}
}


var ConnectedWindowsManager = connect<IWindowsManagerProps, IWindowsManagerDispatchProps, any>(function mapStateToProps(state: any, ownProps){
	return {...state.WindowsManager};
}, function mapDispatchToProps(dispatch): IWindowsManagerDispatchProps{
	return {};
})(WindowsManager);

export default ConnectedWindowsManager;