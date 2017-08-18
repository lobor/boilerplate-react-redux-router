import React from 'react'
import { router, navigate } from './../store/'

export default class Link extends React.Component {
	clickItem(e) {
		e.preventDefault();
		e.stopPropagation();
		router.dispatch(navigate(e.target.href))
	}

	render() {
		var {
			children, to, ...args
		} = this.props;

		return (<a href={to} onClick={this.clickItem} {...args} className='page-layout__nav-item--active'>{children}</a>)
	}
}
