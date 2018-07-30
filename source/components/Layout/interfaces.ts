import {ISizeStrict, IPositionStrict} from "@interfaces"

export interface ILayoutState {
	window: ISizeStrict & IPositionStrict,
	content: ISizeStrict & IPositionStrict,
}
export interface ILayoutStateElements extends IPositionStrict, ISizeStrict {
}
export interface ILayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	loading: boolean
}
export interface ILayoutDispatchProps {
	setLayoutState(sizes: ILayoutState): void;
}