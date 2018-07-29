import {styled} from "@utils";


module.exports = function(Self){
	return styled(Self, true)`
		position: fixed;
		width: 400rem;
		height: 400rem;
		background: rgba(70, 70, 70, 0.99);
	`;
}

module.exports.children = function({Box, Header, Body, Buttons, ButtonControl, ResizeBorder, ...children}){
	return {
		...children,
		Box: styled(Box)`
			transform: scale(${ (props) => props['isVisible'] ? '1' : '0' });
			opacity: ${ boxOpacity };
			box-shadow: ${(props) => props['inFocus'] ? '0 0 30rem rgba(0, 0, 0, 0.5)' : '0 0 10rem rgba(0, 0, 0, 0.1)'};
			top: 100rem;
			left: 100rem;
			display: flex;
			flex-direction: column;
			transition: transform 0.3s, opacity 0.3s, top 0.05s, left 0.05s, height 0.05s, width 0.05s;
		`,
		Header: styled(Header)`
			width: 100%;
			height: 20rem;
			background: rgba(0, 0, 0, 0.8);
			display: flex;
			flex-grow: 0;
			flex-shrink: 0;
			position: relative;
		`,
		Body: styled(Body)`
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			overflow: hidden;
			position: relative;
		`,
		Buttons: styled(Buttons)`
			display: flex;
			align-items: center;
			padding: 6rem;
		`,
		ButtonControl: styled(ButtonControl)`
			display: block;
			width: 8rem;
			height: 8rem;
			padding: 0;
			border-radius: 50%;
			border: 0;
			transition: all 0.3s;
			cursor: pointer;
			margin-right: 4rem;
			${ buttonStyles }
		`,
		ResizeBorder: styled(ResizeBorder)`
			position: absolute;
			font-size: 4rem;
			z-index: 2;
			background: red;
			${ ResizeBorderStyle };
		`
	}
}
function buttonStyles(props){
	let color = '';
	let colorHover = '';
	switch(props['button-type']){
		case 'close':
			color = '#f77';
			colorHover = '#f55';
		break;
		case 'minimize':
			color = '#7f7';
			colorHover = '#5f5';
		break;
		case 'maximize':
			color = '#ff7';
			colorHover = '#ff5';
		break;
	}
	return `
		background: ${ color };
		&:hover {
			background: ${ colorHover };
		}
	`;
}
function boxOpacity(props) {
	if( props['isVisible'] ){
		if( props['inFocus'] ){
			return '1';
		}
		return '0.8';
	}
	return '0';
}
function ResizeBorderStyle(props){
	var result = '';

	switch(props['Type']){
		case 'top':
			result += `
				top: -0.5em;
				left: 0;
				right: 0;
				height: 1em;
				cursor: ns-resize !important;
			`;
		break;
		case 'bottom':
			result += `
				bottom: -0.5em;
				left: 0;
				right: 0;
				height: 1em;
				cursor: ns-resize !important;
			`;
		break;
		case 'left':
			result += `
				left: -0.5em;
				top: 0;
				bottom: 0;
				width: 1em;
				cursor: ew-resize !important;
			`;
		break;
		case 'right':
			result += `
				right: -0.5em;
				top: 0;
				bottom: 0;
				width: 1em;
				cursor: ew-resize !important;
			`;
		break;
		case 'left-top':
			result += `
				top: -0.5em;
				left: -0.5em;
				width: 1em;
				height: 1em;
				cursor: nwse-resize !important;
			`;
		break;
		case 'right-bottom':
			result += `
				bottom: -0.5em;
				right: -0.5em;
				width: 1em;
				height: 1em;
				cursor: nwse-resize !important;
			`;
		break;
		case 'right-top':
			result += `
				top: -0.5em;
				right: -0.5em;
				width: 1em;
				height: 1em;
				cursor: nesw-resize !important;
			`;
		break;
		case 'left-bottom':
			result += `
				bottom: -0.5em;
				left: -0.5em;
				width: 1em;
				height: 1em;
				cursor: nesw-resize !important;
			`;
		break;
	}
	if( props['Type'].indexOf('-') != -1 ){
		result += `
			z-index: 3;
			background: green;
		`;
	}

	return result;
}