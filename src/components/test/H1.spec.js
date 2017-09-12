import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Column from './../column'

test('render column', () => {
  const tree = renderer.create(<Column />).toJSON()
  expect(tree).toMatchSnapshot()
})
