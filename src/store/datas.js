import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

import test from './../reducers/test'

let store = createStore(test, applyMiddleware(ReduxThunk))

module.exports = store
