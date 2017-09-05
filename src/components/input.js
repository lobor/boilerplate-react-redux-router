import styled from 'styled-components'
import { theme } from './../theme'

module.exports = styled.input`
  height: 38px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid ${theme.border.color};
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  &:focus{
    border: 1px solid ${theme.border.focus};
    outline: 0;
  }
`;
