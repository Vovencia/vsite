import * as apps from "@apps";

import {getApp} from "@system";

// declare  var __Apps: any

// let apps = __Apps;

export default function(){
	var promise = new Promise(function(resolve, reject){
		setTimeout( () => resolve([apps.calculator]), 10 );
	});

	return promise;
}