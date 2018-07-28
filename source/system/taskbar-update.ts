import { getActionName as getWindowsManagerActionName, actions as windoactionsActions } from "../components/WindowsManager";
import { setListInState as taskbarSetListInState, getListFromState as taskbarGetListFromState} from "../components/Taskbar";

export function reducer(state, action){
	switch(action.type){
		case 'Applications.loaded':
		case getWindowsManagerActionName('countChanged'):
			var list = taskbarGetListFromState(state);
			if( action.type == 'Applications.loaded' ){
				list = list.filter( item => item.typeShutcut != 'app' ).concat(action.list.map(function(item){
					return {
						typeShutcut: 'app',
						id: item.appInfo.uid,
						call: item.call,
						appInfo: item.appInfo,
					}
				}))
			} else {
				list = list.filter( item => item.typeShutcut != 'window' ).concat(action.list.map(function(item){
					return {
						typeShutcut: 'window',
						id: item.id + ':' + item.appInfo.uid,
						call: function(){
							windoactionsActions.focus(item.id);
						},
						appInfo: item.appInfo,
					}
				}))
			}
			state = taskbarSetListInState(list, state);
		break;
	}

	// Taskbar.add

	return state;
}