import React from 'react'
import renderer from 'react-test-renderer'

import About from './index'

describe('Test route About', () => {
	const tree = renderer.create(<About />).toJSON()

	test('render About', () => {
	  expect(tree).toMatchSnapshot()
	})
})
