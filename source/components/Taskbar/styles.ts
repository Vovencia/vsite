import {styled} from "@utils";


export default function (obj, {Content, Item, ...children}){
	return {
		...children,
		Self: styled(obj)`
			width: 50rem;
			flex-grow: 0;
			flex-shrink: 1;
			transition: left 0.3s;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 20rem 0;
			&:hover {
				z-index: 10;
			}
		`,
		Content: styled(Content)`
			width: 50rem;
			background: rgba(70, 70, 70, 0.5);
			border-radius: 0 5rem 5rem 0;
			max-height: 100%;
			display: flex;
			flex-direction: column;
			padding: 5rem 0;
			position: relative;
			&:after {
				content: '';
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				width: 10rem;
				z-index: 100;
			}
		`,
		Item: styled(Item)`
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30rem;
			height: 30rem;
			margin: 5rem auto;
			transition: transform 0.3s;
			position: relative;
			img,
			svg {
				max-width: 80%;
				max-height: 80%;
				display: block;
			}
			&:hover {
				transform: scale(1.1)
			}
			${props => {
				if( props['typeShutcut'] != 'window' ) return '';
				return `
					&:after {
						content: '';
						display: block;
						position: absolute;
						right: 0rem;
						bottom: 0rem;
						width: 5rem;
						height: 5rem;
						border-radius: 50%;
						background: ${ (props['States'] && props['States'].indexOf('inFocus') != -1) ? '#5f5' : '#ff5' };
					}
				`;
			}}
		`
	}
}