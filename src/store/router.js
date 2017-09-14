import React from 'react'

import { store } from 'store'

// LIB FOR ROUTER
import Path from 'path-parser'
import { createStore } from 'redux'
import url from 'url'

var routes = [];
var errorRoute = {};

// STORE
let routeStore = createStore(reducers)


function reducers(initisalState = {}, { type, payload }) {
	if (type === 'navigate') {
		var params = payload.params || {};
		return Object.assign(initisalState, { props: undefined, actions: undefined }, payload.route, { params });
	} else if (type === '404') {
		return Object.assign(initisalState, { props: undefined, actions: undefined }, { component: errorRoute[type] });
	}
	return initisalState;
}


function navigate(href, pushTate = true) {
	if (pushTate) {
		history.pushState(href, null, href);
	}
	for (const route of routes) {
		const parsed = url.parse(href)
		const matched = route.path.match(parsed.path)

		if (matched) {
			return {
				type: 'navigate',
				payload: { route, params: matched }
			}
		}
	}
	return {
		type: '404',
		payload: { href }
	}
}


export { routeStore, navigate };


// LISTEN CHANGE URL
window.addEventListener('popstate', event => {
  const { state } = event
  if (typeof state === 'string') {
    routeStore.dispatch(navigate(state, false))
  }
}, false)

// COMPOSANT ROUTER
export default class Router extends React.Component {
	state = {
		Children: null,
		Layout: null,
		props: {},
	}

	_parseRoutes(children, parentPath = '') {
		for (var { path, ...route } of children) {
			routes.push({
				path: new Path(parentPath + path),
				...route
			});

			if (route.children) {
				this._parseRoutes(route.children, path);
			}
		}
	}

	_getPropsComponent(state, stateRoute) {
		var props = {};
		if (stateRoute.props) {
			for (var keys of stateRoute.props) {
				keys = keys.split('.');
				var memorizeState = {};
				for (var key of keys) {
					memorizeState = memorizeState[key] || state[key]
				}
				props[key] = memorizeState;
			}
		}

		// get actions call
		if (stateRoute.actions) {
			for (var key in stateRoute.actions) {
				props[key] = (...params) => {
					store.dispatch(stateRoute.actions[key](...params));
					this._setChild()
					this.forceUpdate()
				}
			}
		}
		return props;
	}

	_setChild() {
		var state = store.getState();
		var stateRoute = routeStore.getState();
		var props = this._getPropsComponent(state, stateRoute);
		var Component = stateRoute.component
		this.setState({ Children: (<Component />), props: { ...props, location: { params: stateRoute.params } } });
	}

	componentWillMount() {
		this.setState({ Layout: this.props.routes.defaultLayout });

		errorRoute = this.props.routes.error || {};

		// LOAD ROUTE
		this._parseRoutes(this.props.routes.children);

		// WHEN URL IS CHANGE, LOAD CHILD WITH ROUTE MATCHED
		routeStore.subscribe(()=>(this._setChild()));

		routeStore.dispatch(navigate(location.href))
	}

	render() {
		const {
			Children,
			Layout,
			props
		} = this.state;
		var Component = React.cloneElement(Children, { ...props })

		return (
			<Layout children={Component} />
		)
	}
}
