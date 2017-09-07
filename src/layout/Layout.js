import React from 'react'
import styled from 'styled-components'
import { media } from './../theme'
import { Link, H1, Nav, Row, Box } from 'components';
import PropTypes from 'prop-types'

const Container = styled.div`
	padding: 42px 10px 0;
	flex-direction: column;

	${media.Mobile`
		padding: 0 10px 42px;
	`}
`

const LinkButton = styled(Link)`
	cursor: pointer;
	align-self: flex-end;
	display: none;
	${media.Mobile`
		display: flex;
	`}
`;

const ContainerLink = styled.div`
	display: flex;
	${media.Mobile`
		flex-direction: column;
	`}
`

export default class PageLayout extends React.Component {
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
	  return (
			<div className='container text-center'>
				<Nav horizontal top open={this.state.menu}>
					<LinkButton onClick={this.toggleMenu}><div className="icon-menu"/></LinkButton>
					<ContainerLink open={this.state.menu}>
						<Link href='/' onClick={this.toggleMenu}>Home</Link>
						<Link href='/toto' onClick={this.toggleMenu} regexp>Toto</Link>
					</ContainerLink>
				</Nav>
				<Container>
					{this.props.children}
				</Container>
		  </div>
		)
	}
}
