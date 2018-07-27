import {_styled as _, styled} from "../../utils";

module.exports = function(obj, {Container, Content, ContainerColumn, ContainerRow,...children}){
	return {
		...children,

		Self: styled(obj)`
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			flex-grow: 1;
			width: 100%;
			height: 100%;
		`,
		Container: styled(Container)`
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			flex-grow: 1;
			width: 100%;
			height: 100%;
		`,
		Content: styled(Content)`
			flex-grow: 1;
		`,
		ContainerColumn: styled(ContainerColumn)`
			display: flex;
			flex-direction: column;
			flex-grow: 1;
		`,
		ContainerRow: styled(ContainerRow)`
			display: flex;
			flex-direction: row;
			flex-grow: 1;
		`

	}
}