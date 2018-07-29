export interface IPosition {
	x?: number;
	y?: number;
}
export interface IPositionStrict {
	x: number;
	y: number;
}

export enum IPositionRelativeX {
	left	= 'LEFT'  	,
	center	= 'CENTER'	,
	middle	= 'CENTER'	,
	right	= 'RIGHT' 	,
}

export enum IPositionRelativeY {
	top		= 'TOP'  	,
	center	= 'CENTER'	,
	middle	= 'CENTER'	,
	bottom	= 'BOTTOM' 	,
}