import React from 'react'

import Link from './../components/Link';
import PropTypes from 'prop-types'

export default class PageLayout extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	render() {
	  return (<div className='container text-center'>
	    <h1>Test</h1>
	    <Link href='/' className='page-layout__nav-item--active'>Home</Link>
	    {' · '}
	    <Link href='/toto' className='page-layout__nav-item--active'>Toto</Link>
	    <div className='page-layout__viewport'>
	      {this.props.children}
	    </div>
	  </div>)
	}
}
