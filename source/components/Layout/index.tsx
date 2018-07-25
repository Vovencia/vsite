import * as React from "react";
import {styled} from "../../";

import "./index.styl";

console.log(styled)

var App = styled.div`
	${ styled._.size(10) }
`

export default class Layout extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<App>123</App>
		)
	}
}