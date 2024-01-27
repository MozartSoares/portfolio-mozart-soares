import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { darken } from 'polished'

export const AsideContainer = styled.aside`
  background-color: ${colors.asideColor};
  height: 94vh;
  max-width: 20%;
`

export const SimbolsNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 20%;
  background-color: ${colors.backgroundMain};

  div {
    width: 100%;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      color: ${colors.iconColor};
      width: 100%;
      padding: 10px 0;

      &:hover {
        background-color: ${darken(0.2, colors.backgroundMain)};
      }
    }
  }
`
