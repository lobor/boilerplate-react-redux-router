import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Textarea from './../textarea'

test('render textarea', () => {
  const tree = renderer.create(<Textarea />).toJSON()
  expect(tree).toMatchSnapshot()
})
