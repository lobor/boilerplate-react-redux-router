import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Box from './../box'

test('render right box', () => {
  const tree = renderer.create(<Box />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render left box', () => {
  const tree = renderer.create(<Box left />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render center box', () => {
  const tree = renderer.create(<Box center />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render space around box', () => {
  const tree = renderer.create(<Box spaceAround />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render space-between box', () => {
  const tree = renderer.create(<Box spaceBetween />).toJSON()
  expect(tree).toMatchSnapshot()
})
