import {styled} from "@utils";


module.exports = function(obj, {Content, Item, ...children}){
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
			margin: 20px 0;
		`,
		Content: styled(Content)`
			width: 50rem;
			background: rgba(70, 70, 70, 0.5);
			border-radius: 0 5rem 5rem 0;
			max-height: 100%;
			display: flex;
			flex-direction: column;
			padding: 5px 0;
		`,
		Item: styled(Item)`
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;
			margin: 5px auto;
			transition: transform 0.3s;
			img,
			svg {
				max-width: 80%;
				max-height: 80%;
				display: block;
			}
			&:hover {
				transform: scale(1.1)
			}
		`
	}
}