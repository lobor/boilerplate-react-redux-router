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
	/* http://meyerweb.com/eric/tools/css/reset/
   	v2.0 | 20110126
   	License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

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
