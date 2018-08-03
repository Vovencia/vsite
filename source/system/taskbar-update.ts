import { getActionName as getWindowsManagerActionName, actions as windoactionsActions } from "@components/WindowsManager";
import { setListInState as taskbarSetListInState, getListFromState as taskbarGetListFromState} from "@components/Taskbar";
import { sortByKey } from "@utils";

export function reducer(state, action){
	switch(action.type){
		case 'Applications.loaded':
		case getWindowsManagerActionName('changed'):
			var list = taskbarGetListFromState(state);
			if( action.type == 'Applications.loaded' ){
				list = list.filter( item => item.typeShutcut != 'app' ).concat(
					action.list.map(function(item){
						return {
							typeShutcut: 'app',
							id: item.appInfo.uid,
							call: item.call,
							appInfo: item.appInfo,
						}
					}).sort(sortByKey('id'))
				)
			} else {
				list = list.filter( item => item.typeShutcut != 'window' ).concat(
					action.list.map(function(item){
						let state:string[] = [];

						state = ['inFocus'].filter( key => !!item[key] );

						return {
							typeShutcut: 'window',
							states: state.filter(Boolean).join(' '),
							id: item.id + ':' + item.appInfo.uid,
							call: function(){
								windoactionsActions.focus(item.id);
							},
							appInfo: item.appInfo,
						}
					}).sort(sortByKey('id'))
				)
			}

			list.sort(function(a, b){
				if( a.appInfo.uid > b.appInfo.uid ) return  1;
				if( a.appInfo.uid < b.appInfo.uid ) return -1;
				if( a.id > b.appInfo.id ) return  1;
				if( a.id < b.appInfo.id ) return -1;

				return 0;
			})

			state = taskbarSetListInState(list, state);
		break;
	}

	// Taskbar.add

	return state;
}