import React from 'react'
import { router, navigate } from './../store/'

export default class Link extends React.Component {
	state = {
		active: false
	}

	// componentWillMount() {
	// 	this.props.routes.subscribe(() => {
	// 	  const route = this.props.routes.getState()
	// 	  const matched = match(route.href, routesRedux)
	//
	// 	  if (matched) {
	// 	    this.setState({ children: (typeof matched.handler === 'function') ? matched.handler() : matched.handler });
	// 	  } else {
	// 			this.setState({ children: (<div>404 not found</div>) });
	// 	  }
	// 	});
	// }
	//
	// componentWillUnmount() {
	//
	// }

	clickItem = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({ active: true });
		router.dispatch(navigate(e.target.href))
	}

	render() {
		console.log(this.state.active)
		var {
			children, to, ...args
		} = this.props;

		return (<a href={to} style={{ color: this.state.active ? 'red' : 'black' }} onClick={this.clickItem} {...args} className='page-layout__nav-item--active'>{children}</a>)
	}
}
