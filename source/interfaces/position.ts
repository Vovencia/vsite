export interface IPositionAny {
	x?: any;
	y?: any;
}
export interface IPositionAnyStrict {
	x : any;
	y : any;
}

export interface IPosition extends IPositionAny {
	x?: number;
	y?: number;
}
export interface IPositionStrict extends IPositionAnyStrict {
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