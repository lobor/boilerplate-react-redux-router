import React from 'react'
import { match,  navigate, route, router } from './../store/'

import Layout from './../layout/Layout'

import routes from './../Routes'

export default class Router extends React.Component {
	state = {
		children: null
	}

	componentWillMount() {
		var routesRedux = routes.map(({ path, component }) => {
			return route(path, component());
		})

		this.props.routes.subscribe(() => {
		  const route = this.props.routes.getState()
		  const matched = match(route.href, routesRedux)

		  if (matched) {
		    this.setState({ children: (typeof matched.handler === 'function') ? matched.handler() : matched.handler });
		  } else {
				this.setState({ children: (<div>404 not found</div>) });
		  }
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
