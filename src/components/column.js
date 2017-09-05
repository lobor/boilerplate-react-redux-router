import styled from 'styled-components'
import { media, theme } from './../theme'

module.exports = styled.div`
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	margin-right: ${theme.spacing.margin};

	&:last-child {
		margin: 0;
	}

	${media.Mobile`margin: 0;`}
`;
