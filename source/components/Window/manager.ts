import {IWindowInstanceProps} from "./interfaces"
import {IBounds, IBoundsStrict, ISizeStrict} from "@interfaces";

export class Manager {
	private window: IWindowInstanceProps;

	constructor(window: IWindowInstanceProps) {
		this.window = window;
	}

	setBounds(bounds: IBounds){
		const lastBounds: IBoundsStrict = this.getBounds();
		let newBounds: IBoundsStrict = {
			...lastBounds,
			...bounds,
		}
		const changedX1 = lastBounds.x1 != newBounds.x1;
		const changedX2 = lastBounds.x2 != newBounds.x2;
		const changedY1 = lastBounds.y1 != newBounds.y1;
		const changedY2 = lastBounds.y2 != newBounds.y2;

		const maxSize = this.getMaxSize();
		const minSize = this.getMinSize();

	}
	getBounds(): IBoundsStrict {
		return {
			x1: this.window.x,
			y1: this.window.y,
			x2: this.window.x + this.window.width,
			y2: this.window.y + this.window.height,
		}
	}

	setSize(){

	}

	getMaxSize(): ISizeStrict {
		return {
			width	: this.window.maxWidth,
			height	: this.window.maxHeight,
		}
	}
	getMinSize(): ISizeStrict {
		return {
			width	: this.window.minWidth,
			height	: this.window.minHeight,
		}
	}
}