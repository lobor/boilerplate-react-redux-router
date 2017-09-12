import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Alert from './../alert'

test('render default alert', () => {
  const tree = renderer.create(<Alert />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render warning alert', () => {
  const tree = renderer.create(<Alert warning />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render error alert', () => {
  const tree = renderer.create(<Alert error />).toJSON()
  expect(tree).toMatchSnapshot()
})
