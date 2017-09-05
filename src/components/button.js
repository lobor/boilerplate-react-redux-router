import styled from 'styled-components'

import { media, theme } from './../theme'

module.exports = styled.button`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: ${props => props.primary ? '#FFF' : '#555'};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${props => props.primary ? theme.primary.color : 'transparent'};
  border-radius: 4px;
  border: 1px solid ${props => props.primary ? theme.primary.color : theme.border.color};
  cursor: pointer;
  box-sizing: border-box;

  &:hover{
    color: ${props => props.primary ? '#FFF' : '#333'};
    border-color: ${props => props.primary ? theme.primary.hover : theme.border.hover};
    outline: 0;
    background-color: ${props => props.primary ? theme.primary.hover : 'inherit'};
  }

  margin-left: ${theme.spacing.margin};
  &:first-child {
    margin-left: 0;
  }

	${media.Mobile`
		margin-left: 0;
		margin-bottom: ${theme.spacing.margin};
		&:last-child {
	    margin-bottom: 0;
	  }
	`}
`;
