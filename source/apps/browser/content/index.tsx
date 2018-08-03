import * as React from "react";
import WindowContent from "@components/WindowContent";
import {div, el} from "@utils";
import ScrolledContent from "@components/ScrolledContent";
console.log('calculator content')

export class BrowserContent extends WindowContent<any, {
	browserHistory: string[],
}> {
	private defaultUrl = 'https://google.com/';

	constructor(props){
		super(props);
		let state = {
			browserHistory: [],
			...this.state,
		}
		this.state = state;
	}
	render(){
		var url = this.state.browserHistory[this.state.browserHistory.length - 1] || this.defaultUrl;
		return (
			<div className={ this.props.className }>
				<Toolbar>
					
				</Toolbar>
				<SiteFrame sandbox="allow-forms allow-scripts" src={url} />
			</div>
		);
	}
}


let {
	Self: StyledBrowserContent,
	Toolbar,
	SiteFrame,	
} = require('./styles').default(BrowserContent, {
	Toolbar: div("Browser_Toolbar"),
	SiteFrame: el("webview", "Browser_SiteFrame"),
})

export default StyledBrowserContent;