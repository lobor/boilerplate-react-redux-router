import { applyMiddleware, compose, createStore } from 'redux'

import { createMiddleware, History, match, navigate, reducer, route } from 'redux-routing'

// create routing middleware, set up with HTML5 History
const middleware = createMiddleware(History)

// create store with middleware
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
const router = createStoreWithMiddleware(reducer)

module.exports = { router, navigate, match, route }
