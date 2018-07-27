import {styled} from "../../utils";


module.exports = function(obj, {Box, Header, Buttons, ButtonClose, ButtonMinimize, ...children}){

	var boxOpacity = (props) => {
		if( props['style-isVisible'] ){
			if( props['style-inFocus'] ){
				return '1';
			}
			return '0.8';
		}
		return '0';
	}

	return {
		...children,
		Self: styled(obj)`
			position: fixed;
			width: 400rem;
			height: 400rem;
			background: rgba(70, 70, 70, 0.95);
		`,
		Box: styled(Box)`
			transform: scale(${ (props) => props['style-isVisible'] ? '1' : '0' });
			opacity: ${ boxOpacity };
			box-shadow: ${(props) => props['style-inFocus'] ? '0 0 30rem rgba(0, 0, 0, 0.5)' : '0 0 10rem rgba(0, 0, 0, 0.1)'};
			top: 100rem;
			left: 100rem;
			display: flex;
			flex-wrap: wrap;
			transition: transform 0.3s, opacity 0.3s, top 0.05s, left 0.05s;
		`,
		Header: styled(Header)`
			width: 100%;
			height: 20rem;
			background: rgba(0, 0, 0, 0.8);
			display: flex;
		`,
		Buttons: styled(Buttons)`
			display: flex;
			align-items: center;
			padding: 6rem;
		`,
		ButtonClose: styled(ButtonClose)`
			display: block;
			width: 8rem;
			height: 8rem;
			padding: 0;
			border-radius: 50%;
			background: #f77;
			border: 0;
			transition: all 0.3s;
			cursor: pointer;
			margin-right: 4rem;
			&:hover {
				background: #f55;
			}
		`,
		ButtonMinimize: styled(ButtonMinimize)`
			display: block;
			width: 8rem;
			height: 8rem;
			padding: 0;
			border-radius: 50%;
			background: #7f7;
			border: 0;
			transition: all 0.3s;
			cursor: pointer;
			&:hover {
				background: #5f5;
			}
		`
	}
}