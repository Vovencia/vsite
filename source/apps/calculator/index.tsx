import * as info from "./info";
console.log('_info', info)
export {info}

import {window} from "../../system";

import {requiredContent} from "../../utils";

const content = requiredContent("apps.calculator", require("./content").default);

export function call(){
	window.open( content, {
		width: 400,
		height: 400,
		x: 'center',
		y: 'center',
	}, function(windowId){
		console.log(windowId)
	})
}