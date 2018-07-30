import * as apps from "@apps";

import {getApp} from "@system";

// declare  var __Apps: any

// let apps = __Apps;

export default function(){
	var promise = new Promise(function(resolve, reject){

		let _apps = [];
		for(let key in apps) _apps.push(apps[key]);

		setTimeout( () => resolve(_apps), 10 );
	});

	return promise;
}