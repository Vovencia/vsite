import * as React from "react";
import * as EventEmitter from 'events';
import {uid} from "@utils";

type IEventName = 
	'componentDidMount' | 
	'componentDidCatch' | 
	'componentDidUpdate' | 
	'componentWillMount' | 
	'componentWillReceiveProps' | 
	'componentWillUnmount' | 
	'componentWillUpdate' | 
	'shouldComponentUpdate' | string;


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

		this.on('shouldComponentUpdate', (nextProps, nextState) => {
			if( this.props == nextProps && this.state == nextState ) return false;

			const nextPropsKeys = Object.keys(nextProps);
			const propsKeys = Object.keys(this.props);
			const nextStateKeys = Object.keys(nextState);
			const stateKeys = Object.keys(this.state);
			if(nextPropsKeys.length != propsKeys.length) return true;
			if(nextStateKeys.length != stateKeys.length) return true;

			for(var key of nextPropsKeys){
				if( this.props[key] != nextProps[key] ) return true;
			}
			for(var key of nextStateKeys){
				if( this.state[key] != nextState[key] ) return true;
			}

			return false;
		})
	}

	private wrapMethod(methodName){
		if( this[methodName] == ReactComponentWithEventEmmiter.prototype[methodName] ) return;

		var oldMethod = this[methodName];
		this[methodName] = function(...args) {
			let result1 = ReactComponentWithEventEmmiter.prototype[methodName].apply(this, args);
			let result2 = oldMethod.apply(this, args);
			if( methodName != 'shouldComponentUpdate' ) return result2;
			return [result1, result2].reduce(
				((lastValue:boolean, currentValue:boolean) => !!(lastValue || currentValue)),
				false
			)
		}
	}

	on(event: IEventName, listener: (...args: any[]) => void){
		this.eventEmmiter.on(event, (resultKey, ...args: any[]) => {
			this.eventEmmiterResults[resultKey].push(listener(...args));
		});
	}
	one(event: IEventName, listener: (...args: any[]) => void){
		this.eventEmmiter.once(event, (resultKey, ...args: any[]) => {
			this.eventEmmiterResults[resultKey].push(listener(...args));
		});
	}
	off(event: IEventName, listener: (...args: any[]) => void){
		this.eventEmmiter.off(event, (resultKey, ...args: any[]) => {
			this.eventEmmiterResults[resultKey].push(listener(...args));
		});
	}
	emit(event: IEventName, ...args: any[]): any[] {
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
	shouldComponentUpdate(nextProps, nextState){
		return (
			this.emit('shouldComponentUpdate', nextProps, nextState)
				.reduce(
					((lastValue:boolean, currentValue:boolean) => !!(lastValue || currentValue)),
					false
				)
		);
	}
}