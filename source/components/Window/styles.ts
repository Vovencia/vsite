import {styled} from "@utils";


export function self (Self){
	return styled(Self)`
		position: fixed;
		width: 400rem;
		height: 400rem;
		background: rgba(70, 70, 70, 0.99);
	`;
}

export function children({Box, Header, Body, Buttons, ButtonControl, ResizeBorder, Title, TitleText, ...children}){
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
			transition: transform 0.3s, opacity 0.3s/*, top 0.05s, left 0.05s, height 0.05s, width 0.05s*/;
		`,
		Header: styled(Header)`
			width: 100%;
			height: 20rem;
			background: rgba(0, 0, 0, 0.8);
			display: flex;
			flex-grow: 0;
			flex-shrink: 0;
			position: relative;
			&:active {
				cursor: grabbing;
			}
		`,
		Body: styled(Body)`
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			overflow: hidden;
			position: relative;
		`,
		Title: styled(Title)`
			display: flex;
			flex-grow: 1;
			flex-shrink: 1;
			width: 100%;
			font-size: 10rem;
			font-weight: 300;
			align-items: center;
			justify-content: stretch;
			text-align: ${ props => props['windowWidth'] > 200 ? 'center' : 'left' };
			padding: 0 ${ props => props['windowWidth'] > 200 ? '45rem' : '10rem' } 0 45rem;
			pointer-events: none;
		`,
		TitleText: styled(TitleText)`
			display: block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			width: 100%;
		`,
		Buttons: styled(Buttons)`
			display: flex;
			align-items: center;
			padding: 6rem;
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
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
			${ ResizeBorderStyle }
			${ props => ( props['Hidden'] ? 'display: none' : '' ) }
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

	if( props['isMaximized'] ){
		result += 'display: none;' ;
	}

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
		`;
	}

	return result;
}