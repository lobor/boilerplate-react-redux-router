import styled from 'styled-components'
import { media } from './../theme'

module.exports = styled.div`
  font-size: 1rem;
	padding: 5px 10px;
	flex: 1;
	margin-left: 4%;
	${media.Mobile`margin-left: 0;`}
  letter-spacing: .1rem;
	&:first-child{
		margin-left: 0;
	}

`;
