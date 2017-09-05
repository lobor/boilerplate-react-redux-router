import styled from 'styled-components'
import { theme } from './../theme'

module.exports = styled.nav`
  font-size: 1rem;
	list-style: none;
	background-color: #fff;
	display: flex;
	flex-direction: ${props => props.horizontal ? 'row' : 'column'};
	border-style: solid;
	border-color: ${theme.border.color};

	${props => {
		if (props.top) {
			return `
				position: fixed;
		    width: 100%;
				border-bottom-width: 1px;
			`;
		} else {
			return `
				border: 1px solid #d8d8d8;
				border-radius: 3px;
				&:last-child{
					border-bottom-width: 0;
					border-right-width: 0;
				}
			`;
		}
	}}

	a {
    padding: 8px 10px;
    text-shadow: 0 1px 0 #fff;
		border-style: solid;
		border-color: ${theme.border.color};
		border-right-width: ${props => props.horizontal ? '1px' : '0'};
    border-bottom-width: ${props => props.horizontal ? '0' : '1px'};

		color: #4078c0;
		text-decoration: none;

		&.selected {
			font-weight: bold;
	    color: #222;
	    cursor: default;
	    background-color: #fff;
		}
	}
`;
