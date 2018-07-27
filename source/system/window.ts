import {store} from "../index";
import {actions as WindowsManagerActions} from "../components/WindowsManager";
import {ILayoutStateElements} from "../components/Layout/interfaces";

export function open(content, options = {}, callback = function(windowId){}) {
	WindowsManagerActions.open({
		options: options,
		content: content,
		callback: callback,
	})
}

export function getContentState(): ILayoutStateElements{
	return store.getState().Layout.window;
}