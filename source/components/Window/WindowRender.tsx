import * as React from "react";
import {
	div, el,
	mapToArray,
	isPromiseFunction, promiseFunctionCall,
	ReactComponentWithEventEmmiter,
} from "@utils";
import {getDocumentRef} from "@system";

import {IWindowInstanceProps, windowBorderTypes, IWindowInstanceState} from "./interfaces";
import {isVisible} from "./index";


export default class WindowRender extends ReactComponentWithEventEmmiter<
	IWindowInstanceProps & React.HTMLAttributes<HTMLDivElement>,
	IWindowInstanceState
> {
	protected boxRef = React.createRef<HTMLDivElement>();
	protected headerRef = React.createRef<HTMLDivElement>();

	constructor(props){
		super(props);
		this.Box = this.Box.bind(this);
		this.ResizeBorders = this.ResizeBorders.bind(this);
		this.Header = this.Header.bind(this);
		this.Body = this.Body.bind(this);

		this.state = {
			Content: this.props.content,
			loading: false,
		}
	}

	render(){
		return (
			<this.Box>
				<this.ResizeBorders />
				<this.Header />
				<this.Body />
			</this.Box>
		)
	}

	Box(props){
		return (
			<Box {...this.getBoxAttrs()}>
				{ props.children }
			</Box>
		)
	}
	ResizeBorders(){
		return (
			<React.Fragment>
				{ this.props.resizable && mapToArray(windowBorderTypes, this.renderResizeBorder.bind(this)) }
			</React.Fragment>
		)
	}
	Header(){
		return (
			<Header
				elementRef	={ this.headerRef }
				onMouseDown	={ this.handlerHeaderOnPress.bind(this) }
			>
				<Buttons>
					{ this.getButtonControlList().map(this.renderButtonControl.bind(this)) }
				</Buttons>
				<Title windowWidth={ this.props.width }>
					<TitleText>
						{ this.props.appInfo.name }
					</TitleText>
				</Title>
			</Header>
		)
	}
	Body(){
		return (
			<Body>
				{ this.renderContent(this.state.Content, {windowId:this.props.id, contentId:this.props.contentId}) }
			</Body>
		)
	}

	componentWillMount(){
		if( isPromiseFunction(this.state.Content) ) {
			this.setState({
				Content: 'loading',
				loading: true,
			})
			promiseFunctionCall(this.state.Content).then((Content) => {
				this.setState({
					Content: Content,
					loading: false,
				})
			})
		}
	}

	renderContent(Content, attrs){
		switch(typeof Content){
			case 'string': return Content;
			case 'function': return <Content windowId={ this.props.id } {...attrs} />;
		}
		return '';
	}
	renderButtonControl(buttonType){
		if(!buttonType) return '';
		return (
			<ButtonControl
				key={buttonType}
				button-type={buttonType}
				onClick={ this.handlerButtonControlClick.bind(this, buttonType) }
			/>
		)
	}
	renderResizeBorder(type, index){
		return (
			<ResizeBorder
				key={index}
				onMouseDown={ this.handlerResizeBorderPress.bind(this, type) }
				Type={type}
				Hidden={ this.props.isMaximized }
			/>
		)
	}

	handlerOnPress(event) {}
	handlerHeaderOnPress(event) {}
	handlerResizeBorderPress(direction, event) {}
	handlerButtonControlClick(type, event) {}

	getValue(value: any){
		return parseFloat(value) + 'px';
	}
	getButtonControlList(){
		return ['close', this.props.resizable && 'maximize', 'minimize'];
	}
	getBoxAttrs(){
		let style = {
			left		: this.getValue(this.props.x),
			top 		: this.getValue(this.props.y),
			width		: this.getValue(this.props.width),
			height		: this.getValue(this.props.height),
		}
		return {
			documentRef: getDocumentRef(),
			style: style,
			elementRef: this.boxRef,
			isVisible: isVisible(this.props),
			inFocus: this.props.inFocus,
			className: this.props.className,
			onMouseDown: this.handlerOnPress.bind(this),
		}
	}
	loading(isLoading = true){
		this.setState({
			loading: isLoading
		})
	}
}

let {
	Box,
	Header,
	Body,
	Buttons,
	ButtonControl,
	Title,
	TitleText,

	ResizeBorder,
} = require('./styles').children({
	Box: div("Window_Box"),
	Header: div("Window_Header"),
	Title: div("Window_Title"),
	TitleText: div("Window_TitleText"),
	Body: div("Window_Body"),
	Buttons: div("Window_Buttons"),
	ButtonControl: el("button", "Window_ButtonControl"),

	ResizeBorder: div("Window_ResizeBorder"),
})