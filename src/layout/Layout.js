import React from 'react'

import { Link, H1, Nav, Row, Box } from 'components';
import PropTypes from 'prop-types'

export default class PageLayout extends React.Component {
	// static propTypes = {
	// 	children: PropTypes.node.isRequired
	// }

	render() {
	  return (
			<div className='container text-center'>
				<Nav horizontal top>
					<Link href='/'>Home</Link>
					<Link href='/toto' regexp>Toto</Link>
				</Nav>
				<Row style={{ padding: '42px 10px 0px', flexDirection: 'column' }}>
					{this.props.children}
				</Row>
		  </div>
		)
	}
}
