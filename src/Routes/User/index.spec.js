import React from 'react'
import renderer from 'react-test-renderer'
import { list } from 'actions/user'
import User from './index'

describe('Test route User', () => {
	const tree = renderer.create(<User list={list} />).toJSON()

	test('render User', () => {
	  expect(tree).toMatchSnapshot()
	})

	test('click on user', () => {
		tree.click();
	  expect(tree).toMatchSnapshot()
	})
})
