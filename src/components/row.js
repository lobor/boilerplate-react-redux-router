import styled from 'styled-components'
import { media, theme } from './../theme'

module.exports = styled.div`
	font-size: 1.5em;
	display: flex;
	flex-direction: row;
  flex-wrap: wrap;
	margin-bottom: ${theme.spacing.margin};

	${media.Mobile`flex-direction: column;`}

	&:last-child {
		margin: 0;
	}

	${props => {
		if (props.left) {
			return `
				justify-content: flex-end;
			`;
		} else if (props.center) {
			return `
				justify-content: center;
			`;
		} else if (props.spaceAround) {
			return `
				justify-content: space-around;
			`;
		} else if (props.spaceBetween) {
			return `
				justify-content: space-between;
			`;
		}
	}}
`;
