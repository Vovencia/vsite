import appInfo from "./appInfo";
export {appInfo}

import {window} from "@system";
import {requiredContent} from "@utils";
import {IPositionRelativeX, IPositionRelativeY} from "@interfaces"

// import content from "./content";
// const content = requiredContent(appInfo.uid, require("./content/").default);

export function call(){
	window.open({appInfo}, {
		width: 165,
		height: 240,
		// maxWidth: 165,
		// maxHeight: 240,
		// minWidth: 165,
		// minHeight: 240,
		x: IPositionRelativeX.center,
		y: IPositionRelativeY.center,
		resizable: true,
		appInfo: appInfo,
	}, function(windowId){
		console.log(windowId)
	});
}