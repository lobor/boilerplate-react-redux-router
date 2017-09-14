import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from 'components/button'

describe('Test render component button', () => {
  test('render button', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render button primary', () => {
    const tree = renderer.create(<Button primary />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
