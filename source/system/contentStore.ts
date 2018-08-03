import {newError} from "./newError";

let contents = {}
let contentPrefix = "@contentStore:";

export function add(contentName, content){
	if( contents[contentName] ){
		return newError( 'Content with name "' + contentName + '" already exists' );
	}
	contents[contentName] = content;

	return contentPrefix + contentName;
}

export function get(contentName){
	return contents[contentName];
}

export function getContent(contentRequest) {
	if( typeof contentRequest != 'string' ) return contentRequest;
	if( contentRequest.indexOf(contentPrefix) !== 0 ) return contentRequest;
	return get( contentRequest.replace(contentPrefix, "") );
}