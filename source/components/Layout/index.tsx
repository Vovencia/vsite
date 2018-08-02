import * as React from "react";
import { connect } from "react-redux";

import {ILayoutProps, ILayoutDispatchProps, ILayoutState} from "./interfaces";

import {div} from "@utils";

import Cursor from "@components//Cursor";
import WindowsManager from "@components/WindowsManager";

import ControlBar from "@components/ControlBar";
import TaskBar, {reducer as TaskBarReducer} from "@components/Taskbar";

import { reducersManager } from "@system";

export const layoutRef = React.createRef<HTMLDivElement>();

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
			<div className={this.props.className} ref={layoutRef}>
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
} = require('./styles.ts').default(Layout, {
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

reducersManager.addLocalReducer('Layout', function(state: ILayoutState, action){
	if(!state || !state.window){
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
	if(!state || !state.content){
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
})
reducersManager.addLocalReducer('Taskbar', TaskBarReducer);