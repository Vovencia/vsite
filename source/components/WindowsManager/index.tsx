import * as React from "react";
import {connect} from "react-redux";
import {getWindowContent} from "@utils";
import {actions, getActionName} from "./actions";
export {actions, getActionName};

import Window, {defaultWindowProps} from "@components/Window";
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
	renderWindow(window){
		return (<Window key={window.id} {...{...window, ...getWindowContent(window)}} />);
	}
	componentDidMount(){
		actions._load();
	}
}


var ConnectedWindowsManager = connect<IWindowsManagerProps, IWindowsManagerDispatchProps, any>(function mapStateToProps(state: any, ownProps){
	return {...state.WindowsManager};
}, function mapDispatchToProps(dispatch): IWindowsManagerDispatchProps{
	return {};
})(WindowsManager);

export default ConnectedWindowsManager;