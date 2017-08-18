import React from 'react'
import { Provider } from 'react-redux'

import Router from './Router'
import { store,  router } from './../store/'

export default class App extends React.Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
			<Provider store={store}>
        <Router routes={router} />
      </Provider>
    )
  }
}
