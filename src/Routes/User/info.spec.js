import React from 'react'
import renderer from 'react-test-renderer'
import { get } from 'actions/user'
import Info from './info'

describe('Test route User Info', () => {
	const tree = renderer.create(<Info location={{ params: { id: 1 } }} get={get} />).toJSON()

	test('render User', () => {
	  expect(tree).toMatchSnapshot()
	})
})
