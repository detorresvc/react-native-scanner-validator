import { combineReducers } from 'redux';
import * as indexActions  from '../actions';

const initialReducer = (state = {
	loading: false,
	verified_data: {}
}, action) => {
	switch(action.type){
		case indexActions.LOADING:
			return Object.assign({}, state, {
				loading: action.bool
			})
		case indexActions.ON_VERIFY_DATA:
			return Object.assign({}, state, {
				verified_data: {
					...action.data,
					pid: action.id
				}
			})
		default: return state
	}
}


export default combineReducers({
	initialReducer
})