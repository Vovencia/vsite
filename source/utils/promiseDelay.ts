export function promiseDelay(delay = 1){
	return function(input){
		return new Promise(resolve => setTimeout(() => {resolve(input)}, delay));
	}
}