import styled from 'styled-components'
import { media } from './../theme'

module.exports = styled.div`
	font-size: 1.5em;
	display: flex;
	flex-direction: row;
  flex-wrap: wrap;

	${media.Mobile`flex-direction: column;`}
`;
