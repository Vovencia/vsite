import * as React from "react";

import styled from 'styled-components';
export {styled};

import {attrs} from "./funcs"


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