export class Percent {
	private _value = NaN;
	constructor(value: number | string){
		this._value = typeof value == 'string' ? parseFloat(value) : value;
	}
	value(){
		return this._value/100;
	}
	valueOf(){
		return this._value/100;
	}
	toString(){
		return (this._value) + '%';
	}
}