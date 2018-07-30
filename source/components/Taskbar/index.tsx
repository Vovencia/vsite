import * as React from "react";
import { connect } from "react-redux";

import ScrolledContent from "@components/ScrolledContent";

import {div, el, attrs} from "@utils";
import {store} from "@system/index";

class TaskBar extends React.Component <any> {
	render () {
		return (
			<div {...attrs(this.props)}>
				<Content>
					<ScrolledContent>
						{ this.props.apps.map(this.renderItem.bind(this)) }
					</ScrolledContent>
				</Content>
			</div>
		)
	}
	handlerItemClick (app, event){
		event.preventDefault();
		if( app.call ) app.call();
	}
	renderItem(app){
		return (
			<Item
				States={ app.states }
				typeShutcut={ app.typeShutcut }
				onClick={ this.handlerItemClick.bind(this, app) }
				title={app.appInfo.name} key={app.id}
			>
				<img src={ app.appInfo.icon } alt=""/>
			</Item>
		)
	}
}

let {
	Self: StyledTaskBar,
	Content,
	Item,
} = require("./styles.ts")(TaskBar, {
	Content: div("TaskBar_Content"),
	Item: el("a", "TaskBar_Item", {href: "#"}),
})


var ConnectedStyledTaskBar = connect(function mapStateToProps(state: any, ownProps){
	return {
		apps: state.Taskbar.apps,
	}
}, function mapDispatchToProps(dispatch){
	return {}
})(StyledTaskBar);


export default ConnectedStyledTaskBar;
export function reducer(state: {
	apps: Array<{}>;
} = {apps: []}, action){
	if( action.type.indexOf("Taskbar.") !== 0 ) return state;
	var type = action.type.replace("Taskbar.", "");

	switch(type){
		case 'add':
			state = {...state}
			state.apps = state.apps.concat(action.list);
		break;
	}
	return state
}

export function setListInState (list, state){
	if( !state ) state = {};
	state = {...state};
	if( !state.Taskbar ) state.Taskbar = {};
	state.Taskbar = {...state.Taskbar};
	state.Taskbar.apps = [].concat(list);
	return state;
}

export function getListFromState (state){
	if( state && state.Taskbar && state.Taskbar.apps ) return [].concat(state.Taskbar.apps);
	return [];
}