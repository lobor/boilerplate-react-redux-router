import React from 'react'
import renderer from 'react-test-renderer'
import { get } from 'actions/user'
import Info from './info'

const user = {
	id: 1,
	lastName: 'Dupond',
	firstName: 'Lionel'
}

describe('Test route User Info', () => {
	const tree = renderer.create(<Info location={{ params: { id: 1 } }} get={get} user={user} />).toJSON()

	test('render User', () => {
	  expect(tree).toMatchSnapshot()
	})
})
