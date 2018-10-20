import {IWindowInstanceProps} from "@components/Window";
import {ILayoutState} from "@components/Layout/interfaces";

export interface IWindowsManagerProps {
	opened: Array<IWindowInstanceProps>;
	Layout?: ILayoutState;
}

export interface IWindowsManagerDispatchProps {
}