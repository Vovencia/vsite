import * as calculator from "../apps/calculator";


export default function(){
	var promise = new Promise(function(resolve, reject){
		setTimeout( () => resolve([calculator]), 10 );
	});

	return promise;
}