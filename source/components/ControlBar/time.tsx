import * as React from "react";
import {attrs} from "@utils"

export default class Time extends React.PureComponent<null, {
	formattedTime: string;
}> {
	private interval;
	private delay = 200;

	componentWillMount(){ this.interval = setInterval(this.tick.bind(this), this.delay); this.tick(); }
	componentWillUnmount(){ clearInterval(this.interval); }
	tick(){
		this.setState({
			formattedTime: this.getFormatTime(),
		});
	}
	getTime(){
		var dateTime = new Date(Date.now());

		return {
			hour: dateTime.getHours(),
			minutes: dateTime.getMinutes(),
			seconds: dateTime.getSeconds(),
		};
	}
	getFormatTime(){
		var time = this.getTime();

		return `${ ("00" + time.hour).slice(-2) }:${ ("00" + time.minutes).slice(-2) }`;
	}
	render (){
		return (
			<div {...attrs(this.props)}>{ this.state.formattedTime }</div>
		)
	}
}