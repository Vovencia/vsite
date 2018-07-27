import * as React from "react";
import { combineReducers } from 'redux'
import { connect } from "react-redux";

import {ILayoutProps, ILayoutDispatchProps, ILayoutState} from "./interfaces";

import {div} from "../../utils";

import Cursor from "../Cursor";
import WindowsManager, {reducer as WindowsManagerReducer} from "../WindowsManager";

import ControlBar from "../ControlBar";
import TaskBar, {reducer as TaskBarReducer} from "../Taskbar";

class Layout extends React.Component<ILayoutProps & ILayoutDispatchProps> {
	private window: React.RefObject<HTMLDivElement>;
	private content: React.RefObject<HTMLDivElement>;

	constructor(props){
		super(props);
		this.onResize = this.onResize.bind(this);
		this.window = React.createRef();
		this.content = React.createRef();
	}
	render() {
		return (
			<div className={this.props.className}>
				<Cursor />
				
				{ !this.props.loading && this.renderContent() }
			</div>
		)
	}
	componentDidMount(){
		window.addEventListener('resize', this.onResize);
	}
	componentDidUpdate(){
		this.onResize();
	}
	componentWillUnmount(){
		window.removeEventListener('resize', this.onResize);
	}
	renderContent(){
		return (
			<React.Fragment>
				<Container elementRef={this.window}>
					<ContainerColumn>
						<ControlBar />
						<ContainerRow elementRef={this.content}>
							<TaskBar />
							<Content />
						</ContainerRow>
					</ContainerColumn>
				</Container>
				<WindowsManager opened={[]} />
			</React.Fragment>
		)
	}
	onResize(){
		this.props.setLayoutState({
			window: {
				width	: this.window.current.offsetWidth,
				height	: this.window.current.offsetHeight,
				x		: this.window.current.offsetLeft,
				y		: this.window.current.offsetTop,
			},
			content: {
				width	: this.content.current.offsetWidth,
				height	: this.content.current.offsetHeight,
				x		: this.content.current.offsetLeft,
				y		: this.content.current.offsetTop,
			},
		})
	}
}


let {
	Self: StyledLayout,
	Container,
	Content,
	ContainerColumn,
	ContainerRow,
} = require('./styles.ts')(Layout, {
	Container: div("Layout_Container"),
	ContainerColumn: div("Layout_Column"),
	ContainerRow: div("Layout_Row"),
	Content: div("Layout_Content")
});

var ConnectedStyledLayout = connect<ILayoutProps, ILayoutDispatchProps, any>(function mapStateToProps(state: any, ownProps){
	return {
		loading: !!state.System.loading,
	}
}, function mapDispatchToProps(dispatch){
	return {
		setLayoutState(size){
			dispatch({
				type: 'Layout.setLayoutState',
				...size,
			})
		}
	}
})(StyledLayout);


export default ConnectedStyledLayout;
export let reducer = combineReducers({
	Layout: function(state: ILayoutState, action){
		if(!state){
			state = {};
		}
		if(!state.window){
			state = {
				...state,
				window: {
					width	: 0,
					height	: 0,
					x		: 0,
					y		: 0,
				},
			}
		}
		if(!state.content){
			state = {
				...state,
				content: {
					width	: 0,
					height	: 0,
					x		: 0,
					y		: 0,
				},
			}
		}
		switch(action.type){
			case 'Layout.setLayoutState':
				state = {
					...state,
					window: {
						...state.window,
						...action.window,
					},
					content: {
						...state.content,
						...action.content,
					},
				};
			break;
		}
		return state;
	},
	System: function(state = {}, action){
		return state;
	},
	Taskbar: TaskBarReducer,
	WindowsManager: WindowsManagerReducer,
})