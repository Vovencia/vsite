import appInfo from "./appInfo";
export {appInfo}

import {window} from "@system";
import * as contentStore from "@system/contentStore"
import {IPositionRelativeX, IPositionRelativeY} from "@interfaces"
import {promiseFunction} from "@utils/promiseFunction";

const getContent = promiseFunction(function getContent(){
	return import(/* webpackChunkName: "apps/calculator/content" */ "./content").then(function(content){
		return content.default;
	})
});

const content = contentStore.add(appInfo.uid, getContent);

export function call(){
	window.open(content, {
		width: 500,
		height: 300,
		// maxWidth: 165,
		// maxHeight: 240,
		// minWidth: 165,
		// minHeight: 240,
		x: IPositionRelativeX.center,
		y: IPositionRelativeY.center,
		isMaximized: true,
		resizable: true,
		appInfo: appInfo,
	}, function(windowId){
		console.log(windowId)
	});
}