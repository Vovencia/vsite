import storage from "./storage";

export function stateSave(stateName, state){
	storage.set('States.' + stateName, JSON.stringify(state));
}

export function stateRemove(stateName){
	storage.remove('States.' + stateName);
}

export function stateLoad<T>(stateName, _default = {}) {
	var parsed = JSON.parse(storage.get('States.' + stateName) || "{}");
	return {..._default, ...parsed};
}