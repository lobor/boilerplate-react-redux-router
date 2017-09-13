import React from 'react'
import renderer from 'react-test-renderer'

import Home from './index'

describe('Test route Home', () => {
	const tree = renderer.create(<Home />).toJSON()

	test('render Home', () => {
	  expect(tree).toMatchSnapshot()
	})
})
