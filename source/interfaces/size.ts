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



export interface IMinSizeAny {
	minWidth		?: any;
	minHeight		?: any;
}
export interface IMinSizeAnyStrict {
	minWidth		 : any;
	minHeight		 : any;
}

export interface IMinSize extends IMinSizeAny {
	minWidth		?: number;
	minHeight		?: number;
}
export interface IMinSizeStrict extends IMinSizeAnyStrict {
	minWidth		 : number;
	minHeight		 : number;
}


export interface IMaxSizeAny {
	maxWidth		?: any;
	maxHeight		?: any;
}
export interface IMaxSizeAnyStrict {
	maxWidth		 : any;
	maxHeight		 : any;
}

export interface IMaxSize extends IMaxSizeAny {
	maxWidth		?: number;
	maxHeight		?: number;
}
export interface IMaxSizeStrict extends IMaxSizeAnyStrict {
	maxWidth		 : number;
	maxHeight		 : number;
}


export let sizeDefault: ISizeStrict = {
	width: 0,
	height: 0,
}
export let minSizeDefault: IMinSizeStrict = {
	minWidth: 0,
	minHeight: 0,
}
export let maxSizeDefault: IMaxSizeStrict = {
	maxWidth: 0,
	maxHeight: 0,
}