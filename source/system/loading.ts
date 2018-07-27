var loadingComponents = [];

export function reducer(store, state:any = {}, action){
	switch(action.type){
		case 'loading':
			loadingComponents.push(action.name);
		break;
		case 'loaded':
			loadingComponents = loadingComponents.filter( item => (item != action.name));
		break;
		default: return state;
	}
	if(!state.System) state.System = {};
	if(loadingComponents.length){
		state.System.loading = true;
	} else {
		state.System.loading = false;
	}
	document.documentElement.classList[ state.System.loading ? 'add' : 'remove' ]('document-loading');
	document.documentElement.classList[ !state.System.loading ? 'add' : 'remove' ]('document-loaded');
	return state;
}