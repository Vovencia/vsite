export * from "./ReactComponentWithEventEmmiter";
export * from "./AliveReactComponent";
export * from "./ReducersManager";
export * from "./promiseDelay";
export * from "./promiseFunction";
export * from "./funcs";
export * from "./state";
export * from "./action";
export * from './styled';

export {default as _styled} from '../mixins/styled';



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

// var contents = {};

// export function getContent(content, contentId?: string){
// 	var contentState = contentId ? (stateLoad("Content." + contentId)) : {};

// 	if( typeof content == 'string' && content.indexOf("@required:") === 0 ){
// 		content = contents[content.replace("@required:", "")];
// 	}
// 	return {content, contentState};
// }

// export function getWindowContent(window) {
// 	var windowId = window.id;
// 	var windowContent = window.content;
// 	var contentId = '';

// 	if( typeof windowContent == 'string' && windowContent.indexOf("@required:") === 0 ){

// 		var contentId = windowContent.replace("@required:", "");
// 		var contentState = contentId ? (stateLoad("Content." + windowId + ':' + contentId)) : {};

// 		windowContent = contents[contentId];
// 	}

// 	return {content: windowContent, contentState, contentId: contentId};
// }

// export function requiredContent(contentId, content){
// 	contents[contentId] = content;
// 	return "@required:" + contentId;
// }

// export function stateSave(stateName, state){
// 	storage.set('States.' + stateName, JSON.stringify(state));
// }

// export function stateRemove(stateName){
// 	storage.remove('States.' + stateName);
// }

// export function stateLoad<T>(stateName, _default = {}) {
// 	var parsed = JSON.parse(storage.get('States.' + stateName) || "{}");
// 	return {..._default, ...parsed};
// }
