import * as React from "react";
import { connect } from "react-redux";

import ScrolledContent from "../ScrolledContent";

import {div, el, repeatJoin, attrs} from "../../utils";

class TaskBar extends React.Component <any> {
	render () {
		return (
			<div {...attrs(this.props)}>
				<Content>
					<ScrolledContent>
						{
							this.props.apps.map((function(app){
								return (
									<Item onClick={ this.handlerItemClick.bind(this, app) } title={app.info.name} key={app.info.uid}>
										<img src={ app.info.icon } alt=""/>
									</Item>
								)
							}).bind(this))
						}
					</ScrolledContent>
				</Content>
			</div>
		)
	}
	handlerItemClick (app, event){
		event.preventDefault();
		if( app.call ) app.call();
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