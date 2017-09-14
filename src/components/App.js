import React from 'react'
// import { Provider } from 'react-redux'

// import Router from './Router'
import { store } from 'store/'

import Router from 'store/router'

import routes from './../Routes'

export default class App extends React.Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Router routes={routes} store={store} />
    )
  }
}
