import {styled} from "@utils";


module.exports = function(Self, {Display, DisplayText, Button, Buttons, ...children}){
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
			align-items: center;
			justify-content: flex-end;
			word-break: break-all;
			text-align: right;
			flex-grow: 1;
			&:after {
				content: attr(data-value);
			}
		`,
		Buttons: styled(Buttons)`
			flex-grow: 0;
			margin-left: 1px;
			flex-shrink: 0;
			display: flex;
			flex-wrap: wrap;
			margin-top: 1px;
		`,
		Button: styled(Button)`
			display: block;
			width: 40px;
			height: 30rem;
			border: 0;
			margin-right: 1px;
			margin-bottom: 1px;
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
		`
	}
}