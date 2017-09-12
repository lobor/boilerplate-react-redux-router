import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Input from './../input'

test('render input', () => {
  const tree = renderer.create(<Input />).toJSON()
  expect(tree).toMatchSnapshot()
})
