import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import Nav from './../nav'

describe('Test component Nav', () => {
	test('simple nav', () => {
	  const tree = renderer.create(<Nav />).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	test('horizontal nav', () => {
	  const tree = renderer.create(<Nav horizontal />).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	test('top nav', () => {
	  const tree = renderer.create(<Nav top />).toJSON()
	  expect(tree).toMatchSnapshot()
	})
});
