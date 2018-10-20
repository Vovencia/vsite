import {IAppInfo, Percent, IPositionRelativeX, IPositionRelativeY, IBoundsStrict} from "@interfaces";

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
	isMinimized		?: boolean;
	isMaximized		?: boolean;

	state			?: windowStates;
	toState			?: windowStates;
	resizable		?: boolean;

	appInfo			?: IAppInfo;
	id				?: any;
}
export interface IWindowConstructorPropsStrict {
	width			: number,
	height			: number,
	x				: number,
	y				: number,
	minWidth		: number,
	minHeight		: number,
	maxWidth		: number,
	maxHeight		: number,

	inFocus			: boolean;
	isMinimized		: boolean;
	isMaximized		: boolean;

	state			: windowStates;
	toState			: windowStates;
	resizable		: boolean;

	appInfo			: IAppInfo;
	id				: any;
}

export interface IWindowInstanceProps extends IWindowConstructorPropsStrict {
	contentId		: any;
	content			: React.ComponentType<{id: string, state: any, contentId: string}> | string;
}

export const defaultWindowConstructorProps:IWindowConstructorPropsStrict = {
	x				: 100,
	y				: 100,
	width			: 400,
	height			: 400,
	minWidth		: 50,
	minHeight		: 50,
	maxWidth		: NaN,
	maxHeight		: NaN,

	inFocus			: false,
	isMinimized		: false,
	isMaximized		: false,

	state			: windowStates.New,
	toState			: windowStates.Normal,
	resizable		: true,
	appInfo			: null,
	id				: '',
}

export const defaultWindowProps:IWindowInstanceProps = {
	...defaultWindowConstructorProps,
	contentId		: '',
	id				: '',
	content			: '',
}

export interface IWindowInstanceState {
	Content: any;
	loading: boolean;
}