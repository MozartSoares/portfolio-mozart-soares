import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3vh;
  height: 100%;
  font-family: 'source sans';
  font-size: 16px;
  z-index: 2;
  min-width: 100%;

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
