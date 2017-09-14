import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Loading from 'components/Loading'

describe('Test component Loading', () => {
  test('render Loading', () => {
    const tree = renderer.create(<Loading />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
