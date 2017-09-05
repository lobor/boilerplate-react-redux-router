import React from 'react'
import { match,  navigate, route, router } from './../store/'

import Layout from './../layout/Layout'

import routes from './../Routes'

export default class Router extends React.Component {
	state = {
		children: null
	}

	componentWillMount() {
		var routesRedux = routes.map(({ path, component, actions }) => {
			var Component = component;

			var action;
			for (var key in actions) {
				action = actions[key];

				actions[key] = (...params) => {
					this.props.store.dispatch(action(...params));
				}
			}

			return route(path, Component.prototype && !!Component.prototype.isReactComponent ? (<Component {...actions} />): Component());
		})

		this.props.routes.subscribe(() => {
		  const route = this.props.routes.getState()
		  const matched = match(route.href, routesRedux)
			var children = (<div>404 not found</div>);

		  if (matched) {
				children = matched.handler;
				if (typeof matched.handler.type === 'function') {
					var { params, path, handler } = matched;
					var state = this.props.store.getState();
					var sendState = {};
					for (var key in state) {
						if (handler.type.keyState.indexOf(key) !== -1) {
							sendState[key] = state[key];
						}
					}
					children = React.cloneElement(handler, { location: { params, path }, ...sendState });
				}
		  }

			this.setState({ children: children });
		})

		this.props.store.subscribe(() => {
			var state = this.props.store.getState();
			this.setState({ children: React.cloneElement(this.state.children, state) });
		})
		this.props.routes.dispatch(navigate(window.location.pathname))
	}

	render() {
		const {
			children
		} = this.state;
		return (
			<Layout children={children} />
		)
	}
}
