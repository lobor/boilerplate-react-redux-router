import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './components/App'
import { theme } from './theme'

const MOUNT_NODE = document.getElementById('root')

render();

function render(NextRootContainer = App) {
	ReactDOM.render(
		<ThemeProvider theme={theme}>
			<NextRootContainer />
		</ThemeProvider>,
		MOUNT_NODE
	)
}
