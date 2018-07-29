import {IAppInfo, Percent, IPositionRelativeX, IPositionRelativeY} from "@interfaces";

export enum windowStates {
	New 		= 0b0000001,
	Minimized 	= 0b0000010,
	Normal 		= 0b0000100,
	Maximized 	= 0b0001000,
	Closing		= 0b0010000,
	isVisible	= 0b0001100,
	isOpened	= 0b0001111,
}

export enum windowPressState {
	None,
	Header,
	Border,
}

export enum windowBorderTypes {
	Top				= 'top',
	Left			= 'left',
	Right			= 'right',
	Bottom			= 'bottom',
	LeftTop			= 'left-top',
	LeftBottom		= 'left-bottom',
	RightTop		= 'right-top',
	RightBottom		= 'right-bottom',
}


export interface IWindowConstructorProps {
	width			?: number | Percent,
	height			?: number | Percent,
	x				?: number | Percent | IPositionRelativeX,
	y				?: number | Percent | IPositionRelativeY,
	minWidth		?: number,
	minHeight		?: number,
	maxWidth		?: number,
	maxHeight		?: number,

	inFocus			?: boolean;
	state			?: windowStates;
	toState			?: windowStates;
	resizable		?: boolean;

	appInfo			?: IAppInfo;
}

export interface IWindowInstanceProps {
	width			: number | Percent,
	height			: number | Percent,
	x				: number | Percent | IPositionRelativeX,
	y				: number | Percent | IPositionRelativeY,
	minWidth		: number,
	minHeight		: number,
	maxWidth		: number,
	maxHeight		: number,

	inFocus			: boolean;
	state			: windowStates;
	toState			: windowStates;
	resizable		: boolean;

	appInfo			: IAppInfo;

	
	contentId		: any;
	id				: any;
	content			: React.ComponentType<{id: string, state: any, contentId: string}> | string;
	contentState	: any;
}

// export interface IPropsInstanceNoStrict {
// 	width			?: string | number,
// 	height			?: string | number,
// 	x				?: string | number,
// 	y				?: string | number,
// 	minWidth		?: number,
// 	minHeight		?: number,
// 	maxWidth		?: number,
// 	maxHeight		?: number,

// 	inFocus			?: boolean;
// 	state			?: windowStates;
// 	toState			?: windowStates;
// 	resizable		?: boolean;

// 	appInfo			?: IAppInfo;
// }

// export interface IPropsInstance extends IPropsInstanceNoStrict {
// 	width			?: number,
// 	height			?: number,
// 	x				?: number,
// 	y				?: number,
// }

// interface _IProps {
// 	contentId?		: any;
// 	id				: any;
// 	content?		: React.ComponentType<{id: string, state: any, contentId: string}>;
// 	contentState?	: any;
// }

// export interface IProps extends IPropsInstance, _IProps {
// }
// export interface IPropsNoStrict extends IPropsInstanceNoStrict, _IProps {
// }

export const defaultWindowProps:IWindowInstanceProps = {
	x				: 100,
	y				: 100,
	width			: 400,
	height			: 400,
	minWidth		: 0,
	minHeight		: 0,
	maxWidth		: 0,
	maxHeight		: 0,
	inFocus			: false,
	state			: windowStates.New,
	toState			: windowStates.Normal,
	resizable		: true,
	appInfo			: null,
	contentId		: 0,
	id				: 0,
	content			: '',
	contentState	: {},
}