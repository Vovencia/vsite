export class ReducersManager {
	private reducers:{
		handler		: (state, action) => object;
		namespace  ?: string;
	}[] = [];

	private inReducer = false;
	private currentState;
	private globalState;

	constructor(){
		this.mainReducer = this.mainReducer.bind(this);
	}

	isInReducer(){
		return this.inReducer;
	}

	addReducer(reducer: (state, action) => object){
		this.reducers.push({
			handler: reducer,
		});
	}

	addLocalReducer(namespace, reducer: (state, action) => object) {
		this.reducers.push({
			handler: reducer,
			namespace: namespace,
		});
	}

	getMainReducer(){ return this.mainReducer; }

	getCurrentState(){
		return this.currentState;
	}
	getGlobalState(){
		return this.globalState;
	}

	private mainReducer(state, action){
		this.inReducer = true;
		this.reducers.forEach((reducer) => {
			let _state = state || {};
			if( reducer.namespace ){
				_state = _state[reducer.namespace];
			}

			this.currentState = _state;
			this.globalState = state;

			_state = reducer.handler(_state, action);
			
			if( reducer.namespace ){
				state[reducer.namespace] = _state;
			} else {
				state = {
					...state,
					..._state,
				}
			}
		})
		this.inReducer = false;
		return state;
	}
}