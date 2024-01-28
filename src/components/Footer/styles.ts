import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3vh;
  font-family: 'source sans';
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 8px;
    color: ${colors.textWhite};
    a {
      color: ${colors.textWhite};
    }
  }
`
