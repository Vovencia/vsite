import {IWindowInstanceProps} from "./interfaces"
import {
	IBounds, IBoundsStrict,
	ISize, ISizeStrict,
	IPosition, IPositionStrict,
	IMaxSizeStrict,
	IMinSizeStrict,
	boundsDefault,
	sizeDefault,
	minSizeDefault,
	maxSizeDefault,
	positionDefault,
} from "@interfaces";

export class BoundsManager {
	private state: ISizeStrict & IMinSizeStrict & IMaxSizeStrict & IPositionStrict = {
		...sizeDefault,
		...minSizeDefault,
		...maxSizeDefault,
		...positionDefault,
	};

	constructor(window: IWindowInstanceProps) {
		for(let key in this.state){
			this.state[key] = window[key];
		}
	}

	setBounds(bounds: IBounds){
		const lastBounds: IBoundsStrict = this.getBounds();
		let newBounds: IBoundsStrict = {
			...lastBounds,
			...bounds,
		}
		const changed = {
			x1: lastBounds.x1 != newBounds.x1,
			x2: lastBounds.x2 != newBounds.x2,
			y1: lastBounds.y1 != newBounds.y1,
			y2: lastBounds.y2 != newBounds.y2,
		}

		const maxSize = this.getMaxSize();
		const minSize = this.getMinSize();

		const sizeKeys = {
			'x': 'width',
			'y': 'height',
		};
		const postKeys = ['x', 'y'];

		postKeys.forEach(function(key){
			const key1   = key + '1';
			const key2   = key + '2';
			const value1 = newBounds[key1];
			const value2 = newBounds[key2];
			const sizeKey = sizeKeys[key];
			const changed2 = changed[key2] || (changed[key2] == changed[key1]);
			const _minSize = minSize[sizeKey];
			const _maxSize = maxSize[sizeKey];

			if( _minSize != null && _minSize >= 0 && ((value2 - value1) < _minSize) ){
				if( changed2 ){
					newBounds[key2] = value1 + _minSize;
				} else {
					newBounds[key1] = value2 - _minSize;
				}
			}
			if( _maxSize != null && _maxSize >= 0 && ((value2 - value1) > _maxSize) ){
				if( changed2 ){
					newBounds[key2] = value1 + _maxSize;
				} else {
					newBounds[key1] = value2 - _maxSize;
				}
			}
			if( newBounds[key1] > newBounds[key2] ){
				if( changed2 ){
					newBounds[key2] = newBounds[key1];
				} else {
					newBounds[key1] = newBounds[key2];
				}
			}
		});

		this.setState({
			x		: newBounds.x1,
			y		: newBounds.y1,
			width	: newBounds.x2 - newBounds.x1,
			height	: newBounds.y2 - newBounds.y1,
		});
	}
	setState(state){
		this.state = {
			...this.state,
			...state,
		}
	}
	getState(){
		return this.state;
	}
	getBounds(): IBoundsStrict {
		return {
			x1: this.state.x,
			y1: this.state.y,
			x2: this.state.x + this.state.width,
			y2: this.state.y + this.state.height,
		}
	}

	setSize(size: ISize){
		let bounds = this.getBounds();
		if( size.width != null ){
			bounds = {
				...bounds,
				x2: bounds.x1 + size.width,
			}
		}
		if( size.height != null ){
			bounds = {
				...bounds,
				y2: bounds.y1 + size.height,
			}
		}
		this.setBounds(bounds)
	}

	setPosition(position: IPosition){
		let bounds = this.getBounds();
		const size = this.getSize();
		if( position.x != null ){
			bounds = {
				...bounds,
				x1: position.x,
				x2: position.x + size.width,
			}
		}
		if( position.y != null ){
			bounds = {
				...bounds,
				y1: position.y,
				y2: position.y + size.height,
			}
		}
		this.setBounds(bounds)
	}

	getMaxSize(): ISizeStrict {
		return {
			width	: this.state.maxWidth,
			height	: this.state.maxHeight,
		}
	}
	getMinSize(): ISizeStrict {
		return {
			width	: this.state.minWidth,
			height	: this.state.minHeight,
		}
	}
	getSize(): ISizeStrict {
		return {
			width: this.state.width,
			height: this.state.height,
		}
	}
	getPosition():IPositionStrict {
		return {
			x: this.state.x,
			y: this.state.y,
		}
	}
}