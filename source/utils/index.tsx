import * as React from "react";

import allowProps from "./allowProps";
import storage from "./storage";
import {ISize, IPosition, ISizeStrict, IPositionStrict} from "@interfaces";

export * from "./ReactComponentWithEventEmmiter";
export * from "./AliveReactComponent";

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

export {default as styled} from './styled';
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

export let uid = (function(){
	let lastIndex = 0;
	const dateLengthPrefix = "00000000000000";
	const indexPrefix 	   = "00000000000000";
	return function(){
		var _date  = (dateLengthPrefix + Date.now())   .slice(-dateLengthPrefix.length);
		var _index = (indexPrefix      + (lastIndex++)).slice(-indexPrefix.length);
		return _date + '.' + _index;
	}
})();

var contents = {};

export function getContent(content, contentId?: string){
	var contentState = contentId ? (stateLoad("Content." + contentId)) : {};

	if( typeof content == 'string' && content.indexOf("@required:") === 0 ){
		content = contents[content.replace("@required:", "")];
	}
	return {content, contentState};
}

export function getWindowContent(window) {
	var windowId = window.id;
	var windowContent = window.content;
	var contentId = '';

	if( typeof windowContent == 'string' && windowContent.indexOf("@required:") === 0 ){

		var contentId = windowContent.replace("@required:", "");
		var contentState = contentId ? (stateLoad("Content." + windowId + ':' + contentId)) : {};

		windowContent = contents[contentId];
	}

	return {content: windowContent, contentState, contentId: contentId};
}

export function requiredContent(contentId, content){
	contents[contentId] = content;
	return "@required:" + contentId;
}

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

export function round(value, afterDots: number = 0){
	afterDots = Math.pow(10, afterDots);
	return Math.round(value*afterDots)/afterDots;
}

function mapToArray<T>(obj: any, handler: (element: any, index: any, obj: any) => T): T[] {
	if( Array.isArray(obj) ){
		return obj.map(handler);
	}
	var result = []

	for(var key in obj){
		result.push( handler(obj[key], key, obj) );
	}

	return result;
}

export function positionToSize(pos: IPosition): ISize{
	return {
		width: pos.x,
		height: pos.y,
	}
}
export function sizeToPosition(pos: ISize): IPosition{
	return {
		x: pos.width,
		y: pos.height,
	}
}

export {mapToArray};


export function sortByKey (key) {
	return function(a, b){
		if( a[key] > b[key] ) return  1;
		if( a[key] < b[key] ) return -1;
		return 0;
	}
}

export function keysToArray(obj: any): Array<string | number> {
	let result = [];
	for(let key in obj){
		if( obj[key] ){
			result.push(key);
		}
	}
	return result;
}

export function firstLetterUppercase(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function RenderElement(ElementHandler: (props) => React.Component, self?){
	return function(props){
		return ElementHandler.call(self, props);
	}
}

export function isFunction(func) {
	return typeof func == 'function';
}