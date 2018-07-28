import {styled} from "@utils";


module.exports = function(obj, {Content, Track,Bar, ...children}){
	return {
		...children,
		Self: styled(obj)`
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			flex-grow: 1;
			flex-shrink: 1;
			overflow: hidden;
			position: relative;
		`,
		Content: styled(Content)`
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-shrink: 0;
			position: relative;
			transition: top 0.3s;
		`,
		Track: styled(Track)`
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			width: 5rem;
			display: ${ props => (props['style-isVisible'] ? 'block' : 'none') };
		`,
		Bar: styled(Bar)`
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			background: rgba(0, 0, 0, 0.3);
			border-radius: 10rem;
			transition: top 0.3s;
		`
	}
}