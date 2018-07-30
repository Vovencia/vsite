export interface IBounds {
	x1 ?: number;
	x2 ?: number;
	y1 ?: number;
	y2 ?: number;
}
export interface IBoundsStrict {
	x1  : number;
	x2  : number;
	y1  : number;
	y2  : number;
}

export const boundsDefault: IBoundsStrict = {
	x1: 0,
	x2: 0,
	y1: 0,
	y2: 0,
}