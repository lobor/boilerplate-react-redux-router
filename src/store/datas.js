import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

import test from './../reducers/test'

let store = createStore(test, compose(
	offline(offlineConfig)
))

module.exports = store
