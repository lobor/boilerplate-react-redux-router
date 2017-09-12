import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import H1 from './../H1'

test('render column', () => {
  const tree = renderer.create(<H1 />).toJSON()
  expect(tree).toMatchSnapshot()
})
