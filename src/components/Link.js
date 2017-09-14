import React from 'react'
// import { router, navigate } from './../store/'
import { routeStore, navigate } from 'store/router'
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
		var state = routeStore.getState();
		if (this.props.regexp) {
			reg = new RegExp(this.props.href, 'g');
		}

		if (state && state.path) {
			this.setState({ active: state.path.path === this.props.href || this.props.selected || reg && state.path.path.match(reg) })
			this.unsubscribe = routeStore.subscribe(() => {
				this.setState({ active: state.path.path === this.props.href || reg && state.path.path.match(reg) })
			})
		}
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
			routeStore.dispatch(navigate(e.target.href))
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
