import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Row from './../row'

test('render row', () => {
  const tree = renderer.create(<Row />).toJSON()
  expect(tree).toMatchSnapshot()
})
