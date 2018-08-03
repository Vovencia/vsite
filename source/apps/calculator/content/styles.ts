import {styled} from "@utils";


export default function(Self, {Display, DisplayText, Button, Buttons, DisplayValue, DisplayValues, DisplayAction, ...children}){
	return {
		...children,
		Self: styled(Self)`
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			flex-grow: 1;
		`,
		Display: styled(Display)`
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			padding: 10rem;
			font-size: 20rem;
			font-weight: 300;
			flex-shrink: 1;
			> * {
				flex-grow: 1;
			}
		`,
		DisplayText: styled(DisplayText)`
			width: 100%;
			display: flex;
			flex-grow: 1;
		`,
		DisplayAction: styled(DisplayAction)`
			flex-grow: 0;
			flex-shrink: 0;
			width: 20rem;
			display: flex;
			align-items: center;
			&:after {
				content: attr(data-value);
			}
		`,
		DisplayValues: styled(DisplayValues)`
			display: flex;
			flex-direction: column;
			flex-grow: 1;
		`,
		Buttons: styled(Buttons)`
			flex-grow: 0;
			margin-left: 1px;
			flex-shrink: 0;
			display: flex;
			flex-wrap: wrap;
			margin-top: 1rem;
		`,
		Button: styled(Button)`
			display: block;
			width: calc(25% - 1rem);
			height: 30rem;
			border: 0;
			margin-right: 1rem;
			margin-bottom: 1rem;
			color: #fff;
			background: rgba(0, 0, 0, 0.5);
			cursor: pointer;
			&[data-action=""]{
				opacity: 0;
				pointer-events: none;
				cursor: default;
			}
			&:after {
				content: attr(data-action)
			}
			&:hover {
				background: rgba(0, 0, 0, 0.7);
			}
			&:active {
				background: rgba(0, 0, 0, 1);
			}
		`,
		DisplayValue: styled(DisplayValue)`
			align-items: center;
			justify-content: flex-end;
			word-break: break-all;
			text-align: right;
			flex-grow: 1;
			display: none;
			&[data-value] {
				display: flex;
			}
			&:after {
				content: attr(data-value);
			}
			font-size: ${ calcFontSize }em;
		`
	}
}

function calcFontSize(props) {
	let result = 1;
	const ratio = props['Index'] == 1 ? 0.7 : 1.3;
	
	// if(props['data-value'] && props['data-value'].length > 8){
	// 	result = 8/props['data-value'].length;
	// }

	result *= result*ratio;

	return result;
}