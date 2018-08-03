import {IWindowInstanceProps as IWindowProps} from "@components/Window";
import {ILayoutState} from "@components/Layout/interfaces";

export interface IWindowsManagerProps {
	opened: Array<IWindowProps>;
	Layout: ILayoutState;
}

export interface IWindowsManagerDispatchProps {
}