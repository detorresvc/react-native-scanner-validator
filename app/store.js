import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import axios from 'axios';

var api = axios.create({
  baseURL: 'http://pnp.api.jvil.co/api',
  timeout: 30000
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({
    	api
    })
  )
)

export default store