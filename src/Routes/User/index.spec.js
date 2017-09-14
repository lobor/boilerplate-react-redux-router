import React from 'react'
import renderer from 'react-test-renderer'
import { list } from 'actions/user'
import User from './index'
import { shallow } from 'enzyme';

const users = [
	{
		id: 1,
		lastName: 'Dupond',
		firstName: 'Lionel'
	}
]

describe('Test route User', () => {
	const component = (<User list={list} users={users} />)
	test('render User', () => {
	  expect(component).toMatchSnapshot()
	})

	test('click on user', () => {
		var toto  = shallow(component)
		toto.find('tbody tr').simulate('click');
	  expect(document.location.pathname).toMatch('/user/1')
	})
})
