export interface ISizeAny {
	width		?: any;
	height		?: any;
}
export interface ISizeAnyStrict {
	width		 : any;
	height		 : any;
}

export interface ISize extends ISizeAny {
	width		?: number;
	height		?: number;
}
export interface ISizeStrict extends ISizeAnyStrict {
	width		 : number;
	height		 : number;
}