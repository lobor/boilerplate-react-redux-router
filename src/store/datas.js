import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import reducers from './../reducers'

let store = createStore(combineReducers({...reducers}), compose(
	offline(offlineConfig)
))

module.exports = store
