import {Actions} from 'react-native-router-flux'
export const LOADING = 'LOADING';
export const ON_VERIFY_DATA = 'ON_VERIFY_DATA';

const loading = (bool) => ({
	type: LOADING,
	bool
})

const onVeridy = (data, id) => ({
	type: ON_VERIFY_DATA,
	data,
	id
})


export const verify = (id, is_scan) => (dispatch, getState, { api }) => {
	
	dispatch(loading(true))
	api.get(`/ltopf/verify/${id}`, {})
	.then(response => {
		dispatch(loading(false))
		const { data, status } = response.data

		if(status === 200){
			Actions.result({is_scan})
			dispatch(onVeridy(data, id))
		}
			
	})
	.catch(err => {
		dispatch(loading(false))
		Actions.invalid_license({is_scan})
	})
}