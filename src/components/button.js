import styled from 'styled-components'

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
  background-color: ${props => props.primary ? props.theme.primary.color : 'transparent'};
  border-radius: 4px;
  border: 1px solid ${props => props.primary ? props.theme.primary.color : '#bbb'};
  cursor: pointer;
  box-sizing: border-box;

  &:hover{
    color: ${props => props.primary ? '#FFF' : '#333'};
    border-color: ${props => props.primary ? props.theme.primary.hover : '#888'};
    outline: 0;
    background-color: ${props => props.primary ? props.theme.primary.hover : 'inherit'};
  }

  margin-left: 0.5%;
  &:first-child {
    margin-left: 0;
  }
`;
