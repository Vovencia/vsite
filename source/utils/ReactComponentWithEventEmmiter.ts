import * as React from "react";
import * as EventEmitter from 'events';
import {uid} from "@utils";

export class ReactComponentWithEventEmmiter <P = {}, S = {}> extends React.Component<P, S> {
	protected eventEmmiter: EventEmitter;
	private eventEmmiterResults: object;

	private wrapMethodList = [
		'componentDidMount',
		'componentDidCatch',
		'componentDidUpdate',
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUnmount',
		'componentWillUpdate',
		'shouldComponentUpdate'
	]

	constructor(props){
		super(props);
		this.eventEmmiter = new EventEmitter();
		this.eventEmmiterResults = {};

		this.wrapMethodList.forEach((this.wrapMethod).bind(this));
	}

	private wrapMethod(methodName){
		if( this[methodName] == ReactComponentWithEventEmmiter.prototype[methodName] ) return;

		var oldMethod = this[methodName];
		this[methodName] = function(...args) {
			let result1 = ReactComponentWithEventEmmiter.prototype[methodName].apply(this, args);
			let result2 = oldMethod.apply(this, args);
			if( methodName != 'shouldComponentUpdate' ) return result2;
			return [result1, result2].reduce(
				((lastValue:boolean, currentValue:boolean) => !!(lastValue && currentValue)),
				true
			)
		}
	}

	on(event: string | symbol, listener: (...args: any[]) => void){
		this.eventEmmiter.on(event, (resultKey, ...args: any[]) => {
			this.eventEmmiterResults[resultKey].push(listener(...args));
		});
	}
	one(event: string | symbol, listener: (...args: any[]) => void){
		this.eventEmmiter.once(event, (resultKey, ...args: any[]) => {
			this.eventEmmiterResults[resultKey].push(listener(...args));
		});
	}
	off(event: string | symbol, listener: (...args: any[]) => void){
		this.eventEmmiter.off(event, (resultKey, ...args: any[]) => {
			this.eventEmmiterResults[resultKey].push(listener(...args));
		});
	}
	emit(event: string | symbol, ...args: any[]): any[] {
		const resultKey = uid();
		this.eventEmmiterResults[resultKey] = [];
		this.eventEmmiter.emit(event, resultKey, ...args);
		const results = this.eventEmmiterResults[resultKey];
		delete this.eventEmmiterResults[resultKey];
		return results;
	}
	componentDidMount(){
		this.emit('componentDidMount')
	}
	componentDidCatch(){
		this.emit('componentDidCatch')
	}
	componentDidUpdate(){
		this.emit('componentDidUpdate')
	}
	componentWillMount(){
		this.emit('componentWillMount')
	}
	componentWillReceiveProps(){
		this.emit('componentWillReceiveProps')
	}
	componentWillUnmount(){
		this.emit('componentWillUnmount')
	}
	componentWillUpdate(){
		this.emit('componentWillUpdate')
	}
	shouldComponentUpdate(){
		return (
			this.emit('shouldComponentUpdate')
				.reduce(
					((lastValue:boolean, currentValue:boolean) => !!(lastValue && currentValue)),
					true
				)
		);
	}
}