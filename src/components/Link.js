import React from 'react'
import { router, navigate } from './../store/'
import styled from 'styled-components';

const A = styled.a``;

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

		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}

		if (this.props.onClick) {
			this.props.onClick(e);
		}

		if (e && e.target.href) {
			router.dispatch(navigate(e.target.href))
		}
	}

	render() {
		var { active } = this.state
		var {
			children,
			href,
			className,
			regexp,
			onClick,
			...args
		} = this.props;

		className += active ? ' selected' : ''

		return (<A href={href} onClick={this.clickItem} {...args} className={className}>{children}</A>)
	}
}
