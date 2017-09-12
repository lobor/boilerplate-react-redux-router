import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Select from './../select'

test('render Select', () => {
  const tree = renderer.create(<Select />).toJSON()
  expect(tree).toMatchSnapshot()
})
