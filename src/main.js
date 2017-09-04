import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './components/App'
import { theme } from './theme'

const MOUNT_NODE = document.getElementById('root')

// if (module.hot) {
//   module.hot.accept();
// } //else {
	render();
// }

injectGlobal`
	body {
		font-size: 1.5em;
		line-height: 1.6;
		font-weight: 400;
		font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
		color: #222;
	}
`;
function render(NextRootContainer = App) {
	ReactDOM.render(
		<ThemeProvider theme={theme}>
			<NextRootContainer />
		</ThemeProvider>,
		MOUNT_NODE
	)
}
