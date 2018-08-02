import * as React from "react";

import {div} from "@utils";

class ScrolledContent extends React.PureComponent<{

}, {
	scrollArea: number;
	contentHeight: number;
	contentTop: number;
	barHeight: number;
	barTop: number;
}> {
	private self: React.RefObject<HTMLDivElement>;
	private content: React.RefObject<HTMLDivElement>;
	private track: React.RefObject<HTMLDivElement>;
	private bar: React.RefObject<HTMLDivElement>;
	private contentTop: number;

	constructor(props){
		super(props);
		this.self = React.createRef();
		this.content = React.createRef();
		this.track = React.createRef();
		this.bar = React.createRef();
		this.onResize = this.onResize.bind(this);
		this.state = {
			scrollArea: 0,
			contentHeight: 1,
			contentTop: 0,
			barHeight: 1,
			barTop: 0,
		}
	}
	render(){
		var attrs = {...this.props}
		delete attrs.children;

		let barStyles = {
			height: ((this.state.barHeight * 100) + '%'),
			top: ((this.state.barTop * 100) + '%'),
		}

		var isVisible = !({0: true, 1: true}[this.state.barHeight]);

		return (
			<div ref={this.self} {...attrs}>
				<Content style={{top: -this.state.contentTop + 'px'}} elementRef={ this.content } onWheel={ this.handlerOnWheel.bind(this) }>
					{ this.props.children }
				</Content>
				<Track style-isVisible={ isVisible } elementRef={ this.track }>
					<Bar elementRef={ this.bar } style={barStyles} />
				</Track>
			</div>
		)
	}
	calcScrollState(addTop:number = 0){
		var windowHeight = this.self.current.offsetHeight;
		var contentHeight = this.content.current.offsetHeight;
		var contentTop = this.contentTop + addTop;
		if( contentTop < 0 ) contentTop = 0;
		if( contentTop > contentHeight - windowHeight ) contentTop = contentHeight - windowHeight;

		this.contentTop = contentTop;

		var barHeight = ((windowHeight/contentHeight) || 1);
		var barTop = ((contentTop/contentHeight) || 0);

		windowHeight = (windowHeight/contentHeight);

		return {
			scrollArea: contentHeight - windowHeight,
			contentHeight,
			contentTop,
			barHeight,
			barTop,
		}
	}
	setScrollState(state){
		if( state.barTop + state.barHeight > 1 ){
			state.barTop = 1 - state.barHeight;
		}
		if( state.barTop < 0 ) state.barTop = 0;
		this.setState(state);
	}
	scroll(value){
		var state = this.calcScrollState(value);
		this.setScrollState(state);
	}
	handlerOnWheel(event){
		this.scroll(event.deltaY);
	}
	componentDidMount(){
		window.addEventListener('resize', this.onResize);

		this.contentTop = -(parseFloat(window.getComputedStyle( this.content.current ).top) || 0);
		this.update();
	}
	componentWillUnmount(){
		window.removeEventListener('resize', this.onResize);
	}
	componentDidUpdate(){
		this.update();
	}
	update(){
		this.setScrollState( this.calcScrollState() );
	}
	onResize(){
		this.update();
	}
}


let {
	Self: StyledScrolledContent,
	Content,
	Track,
	Bar,
} = require("./styles.ts").default(ScrolledContent, {
	Content: div("ScrolledContent_Content"),
	Track: div("ScrolledContent_Track"),
	Bar: div("ScrolledContent_Bar"),
})

export default StyledScrolledContent;