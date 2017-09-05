import React from 'react'
import { router, navigate } from './../store/'

export default class Link extends React.Component {
	state = {
		active: false
	}

	static defaultProps = {
		selected: false,
		className: '',
		regexp: false
	}

	componentWillMount() {
		var reg;
		if (this.props.regexp) {
			reg = new RegExp(this.props.href, 'g');
		}
		this.setState({ active: router.getState().href === this.props.href || this.props.selected || reg && router.getState().href.match(reg) })
		this.unsubscribe = router.subscribe(() => {
			this.setState({ active: router.getState().href === this.props.href || reg && router.getState().href.match(reg) })
		})
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	clickItem = (e) => {
		e.preventDefault();
		e.stopPropagation();
		router.dispatch(navigate(e.target.href))
	}

	render() {
		var { active } = this.state
		var {
			children,
			href,
			className,
			regexp,
			...args
		} = this.props;

		className += active ? ' selected' : ''

		return (<a href={href} onClick={this.clickItem} {...args} className={className}>{children}</a>)
	}
}
