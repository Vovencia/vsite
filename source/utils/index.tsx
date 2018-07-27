import * as React from "react";

import allowProps from "./allowProps";

export function el(tagName, name, _props?){
	var result = function (props){
		var props = {
			...props, ..._props
		}
		var _attrs = attrs(props);

		return React.createElement(tagName, _attrs);
	}
	Object.defineProperty(result, "name", { value: name });
	return result;
}

export let div = el.bind({}, 'div');

export {default as styled} from 'styled-components';
export {default as _styled} from '../mixins/styled';


export function repeat(count, handler) {
	for(var i = 0; i < count; i++) handler(i);
}

export function repeatJoin<T>(count, handler): Array<T> {
	var result = [];
	for(var i = 0; i < count; i++) result.push(handler(i));
	return result;
}

export function attrs(props){
	var attrs:any = {};

	for(var key in props){
		if( allowProps.indexOf(key) != -1 ){
			attrs[key] = props[key];
			continue;
		}
		if( key == 'elementRef' ){
			attrs.ref = props.elementRef;
			continue;
		}
		if(key.indexOf('data-') == 0){
			attrs[key] = props[key];
			continue;
		}
		if(key.indexOf('on') == 0){
			attrs[key] = props[key];
			continue;
		}
	}
	return attrs;
}

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

export function random(arg1:number, arg2:number = 0):number {
	const {min, max} = {
		min: Math.min(arg1, arg2),
		max: Math.max(arg1, arg2),
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let lastUidIndex = 0;
export function uid(){
	return Date.now() + "." + random(1000000, 9999999) + "." + (lastUidIndex++);
}


var contents = {};

export function checkContent(content){
	if( typeof content == 'string' && content.indexOf("@required:") === 0 ){
		return contents[content.replace("@required:", "")];
	}
	return content;
}
export function requiredContent(contentName, content){
	contents[contentName] = content;
	return "@required:" + contentName;
}

export function stateSave(stateName, state){
	localStorage.setItem('States.' + stateName, JSON.stringify(state));
}

export function stateLoad<T>(stateName, _default = {}) {
	var parsed = JSON.parse(localStorage.getItem('States.' + stateName) || "{}");
	return {..._default, ...parsed};
}