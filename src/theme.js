import { css } from 'styled-components'
const sizes = {
	DesktopHD: 1200,
	Desktop: 1000,
	Tablet: 750,
	Phablet: 550,
	Mobile: 400
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

	return acc
}, {})


export const theme = { primary: { color: '#33C3F0', hover: '#1EAEDB' }}
