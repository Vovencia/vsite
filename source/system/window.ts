import {store} from "@system/index";
import {defaultWindowProps, IProps, IPropsInstanceNoStrict} from "@components/Window";
import {actions as WindowsManagerActions} from "@components/WindowsManager";
import {ILayoutStateElements} from "@components/Layout/interfaces";
import {IAppInfo} from "@interfaces";

export function open(content, options:IPropsInstanceNoStrict = defaultWindowProps, callback = function(windowId){}) {
	WindowsManagerActions.open({
		options: options,
		content: content,
		callback: callback,
	})
}

export function getContentState(): ILayoutStateElements{
	return store.getState().Layout.window;
}

export function getOpenedApps(): {windowId: string, appInfo: IAppInfo}[] {
	return store.getState().WindowsManager.opened.map(function(window){
		return {
			windowId: window.id,
			appInfo: window.appInfo,
		}
	});
}