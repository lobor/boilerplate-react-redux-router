import styled from 'styled-components'

module.exports = styled.table`
	background-color: white;
	color: #363636;
	margin-bottom: 1.5rem;
	border-collapse: collapse;
	border-spacing: 0;

	td, th {
		border: 1px solid #dbdbdb;
		padding: 0.25em 0.5em;
		vertical-align: top;
	}

	tbody{
		tr {
			cursor: pointer;
			&:hover {
				background-color: #dbdbdb;
			}
		}
	}

	thead {
		th {
	    color: #363636;
	    font-weight: bold;
		}
	}
	tr:last-child th{
		border-bottom-width: 1px;
	}
`;
