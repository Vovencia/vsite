import appInfo from "./appInfo";
export {appInfo}

import {window} from "@system";
import {requiredContent} from "@utils";

const content = requiredContent(appInfo.uid, require("./content/").default);

export function call(){
	window.open( content, {
		width: 165,
		height: 240,
		maxWidth: 165,
		maxHeight: 240,
		minWidth: 165,
		minHeight: 240,
		x: 'center',
		y: 'center',
		resizable: false,
		appInfo: appInfo,
	}, function(windowId){
		console.log(windowId)
	})
}