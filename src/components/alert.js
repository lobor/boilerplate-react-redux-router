import styled from 'styled-components'
import { theme } from './../theme'

module.exports = styled.div`
	padding: 15px;
	font-size: 14px;
	line-height: 1.5;
	color: #246;
	background-color: #e2eef9;
	border: 1px solid #bac6d3;
	border-radius: 3px;
  margin-bottom: ${theme.spacing.margin};

	// warning
	${props => {
		if (props.warning) {
			return 'color: #4c4a42;' +
		  'background-color: #fff9ea;' +
			'border-color: #dfd8c2;'
		}
	}};

	// error
	${props => {
		if (props.error) {
			return 'color: #911;' +
		  'background-color: #fcdede;'+
		  'border-color: #d2b2b2;'
		}
	}}
`;
