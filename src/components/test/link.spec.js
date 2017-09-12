import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';

import Link from './../Link'

test('render link', () => {
	var component = renderer.create(<Link />);
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('render link selected', () => {
	var component = renderer.create(<Link href="/" selected regexp />);
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
