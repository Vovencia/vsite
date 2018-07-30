import loadApplications from "./load-applications";

export function init(store){
	store.dispatch({
		type: 'loading',
		name: 'applications',
	})
	store.dispatch({
		type: 'loading',
		name: 'delay',
	})
	
	setTimeout(() => {
		store.dispatch({
			type: 'loaded',
			name: 'delay',
		})
	}, 1000);
	
	loadApplications().then(function(apps){
		store.dispatch({
			type: 'Applications.loaded',
			list: apps
		})
	
		store.dispatch({
			type: 'loaded',
			name: 'applications',
		})
	});
	
}