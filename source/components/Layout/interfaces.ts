export interface ILayoutState {
	window?: ILayoutStateElements,
	content?: ILayoutStateElements,
}
export interface ILayoutStateElements {
	width?	: number;
	height?	: number;
	x? 		: number;
	y? 		: number;
}
export interface ILayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	loading: boolean
}
export interface ILayoutDispatchProps {
	setLayoutState(sizes: ILayoutState): void;
}