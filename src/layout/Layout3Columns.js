import React from 'react'
import styled from 'styled-components'
import { media } from './../theme'
import { Link, H1, Nav, Row, Box } from 'components';
import PropTypes from 'prop-types'


export default class Layout3Columns extends React.Component {
	state = {
		menu: false
	}
	// static propTypes = {
	// 	children: PropTypes.node.isRequired
	// }
	toggleMenu = () => {
		this.setState({ menu: !this.state.menu });
	}

	render() {
		var { children, ...args } = this.props;
		var Child = React.cloneElement(this.props.children, args)
	  return (
			<Row className='container text-center'>
				<Box>col 1</Box>
				<Box>{Child}</Box>
				<Box>col 3</Box>
		  </Row>
		)
	}
}
