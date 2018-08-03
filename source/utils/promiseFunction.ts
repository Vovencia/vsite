export function promiseFunction(func){
	func.isPromiseFunction = true;
	return func;
}
export function isPromiseFunction(func){
	return !!func.isPromiseFunction;
}
export function promiseFunctionCall(func){
	return func();
}