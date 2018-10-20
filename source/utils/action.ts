export function checkAction(namespace, action) {
	if( action.type.indexOf(namespace) === 0 ){
		return action.type.replace( new RegExp(namespace + ".?"), '');
	}
	return false;
}

export function createAction(namespace, methodName, props = {}){
	return {
		...props,
		type: namespace + "." + methodName,
	};
}