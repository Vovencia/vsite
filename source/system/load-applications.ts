import * as apps from "@apps";
// declare  var __Apps: any

// let apps = __Apps;

export default function(){
	var promise = new Promise(function(resolve, reject){
		console.log(apps.calculator)
		setTimeout( () => resolve([{appInfo: apps.calculator}]), 10 );
	});

	return promise;
}