import { applyMiddleware, compose, createStore } from 'redux'

let store = createStore((state = {}) => {
	return state
})

module.exports = store
