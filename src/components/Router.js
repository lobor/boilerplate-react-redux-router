import React from 'react'
import { match,  navigate, route, router, store } from './../store/'

import { Loading } from 'components'

import routes from './../Routes'


// load redux route
var subRoutes = [];
var routesRedux = routes.children.map((component) => {
	return mapChildren(component);
})

function mapChildren({ path, component, actions, layout, children }, parent = {}) {
	var Component = component;
	var Layout = parent.Layout || layout;
	var action;

	// Create for each actions define by route, a new method for call store. ine react-router it's "connect" method
	for (var key in actions) {
		action = actions[key];
		actions[key] = (...params) => {
			store.dispatch(action(...params));
		}
	}
	Component = Component.prototype && !!Component.prototype.isReactComponent ? (<Component {...actions} />): Component();

	path = (parent.path || '') + path

	// Create the route document in store
	// If the component is created by a class, return html component
	if (Layout) {
		Component = (<Layout children={Component} />)
	}

	if (children) {
		for (var child of children) {
			subRoutes.push(mapChildren(child, { path, Layout }));
		}
	}

	return route(path, Component);
}

routesRedux = routesRedux.concat(subRoutes);

export default class Router extends React.Component {
	state = {
		children: null,
		Layout: routes.defaultLayout
	}

	_getStateDefined(handler, state) {
		var sendState = {};
		for (var key in state) {
			if (handler.type && handler.type.keyState && handler.type.keyState.indexOf(key) !== -1) {
				sendState[key] = state[key];
			}
		}

		return sendState;
	}

	_matchRoute() {
		let route = this.props.routes.getState()
		return match(route.href, routesRedux);
	}

	componentWillMount() {
		this.props.routes.subscribe(() => {
			this.setState({ children: (<Loading />) })
		  let matched = this._matchRoute();
			let children = (<div>404 not found</div>);

		  if (matched) {
				var { params, path, handler } = matched;
				children = handler;
				if (typeof handler.type === 'function') {
					var state = store.getState();
					var sendState = this._getStateDefined(handler, state);
					children = React.cloneElement(handler, { location: { params, path }, ...sendState });
				}
		  }

			this.setState({ children: children });
		})

		store.subscribe(() => {
			var state = store.getState();
			let { params, path, handler } = this._matchRoute();
			var sendState = this._getStateDefined(handler, state);
			this.setState({ children: React.cloneElement(this.state.children, { location: { params, path }, ...sendState }) });
		})
		this.props.routes.dispatch(navigate(window.location.pathname))
	}

	render() {
		const {
			children,
			Layout
		} = this.state;

		return (
			<Layout children={children} />
		)
	}
}
