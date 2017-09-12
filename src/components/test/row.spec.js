import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Row from './../row'

test('render row', () => {
  const tree = renderer.create(<Row />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render row left', () => {
  const tree = renderer.create(<Row left />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render row center', () => {
  const tree = renderer.create(<Row center />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render row spaceAround', () => {
  const tree = renderer.create(<Row spaceAround />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render row spaceBetween', () => {
  const tree = renderer.create(<Row spaceBetween />).toJSON()
  expect(tree).toMatchSnapshot()
})
