import {_styled as _, styled} from "../../utils";

module.exports = function(obj, {RightPanel, Time, ...children}){
	return {
		...children,
		Self: styled(obj)`
			display: flex;
			flex-grow: 0;
			flex-shrink: 0;
			width: 100%;
			height: 20rem;
			color: #fff;
			background: rgba(0, 0, 0, 0.5);
		`,
		RightPanel: styled(RightPanel)`
			display: flex;
			margin-left: auto;
			align-items: center;
			padding: 0 5rem;
		`,
		Time: styled(Time)`
			font-size: 12rem;
			font-weight: 300;
		`
	}
}