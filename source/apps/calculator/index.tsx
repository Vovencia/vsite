import appInfo from "./appInfo";
export {appInfo}

import {window} from "@system";
import {requiredContent} from "@utils";
import {IPositionRelativeX, IPositionRelativeY} from "@interfaces"

function getContent(){
	return import(/* webpackChunkName: "apps/calculator/content" */ "./content").then(function(){
		console.log(arguments)
	})
}

export function call(){
	getContent();
	window.open('123', {
		width: 165,
		height: 240,
		maxWidth: 165,
		maxHeight: 240,
		minWidth: 165,
		minHeight: 240,
		x: IPositionRelativeX.center,
		y: IPositionRelativeY.center,
		resizable: false,
		appInfo: appInfo,
	}, function(windowId){
		console.log(windowId)
	});
}