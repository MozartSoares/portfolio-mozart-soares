import { darken } from 'polished'
import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const SimbolsNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  background-color: ${colors.backgroundMain};

  div {
    width: 100%;

    .is-active {
      border-left: 2px solid ${colors.iconHoverColor};
    }

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
