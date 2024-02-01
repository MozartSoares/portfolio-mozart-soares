import { darken } from 'polished'
import styled from 'styled-components'
import { breakpoints, colors } from '../../GlobalStyles'

export const SimbolsNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.backgroundMain};

  @media screen and (${breakpoints.tablet}) {
  }

  div {
    .is-active {
      border-left: 2px solid ${colors.iconHoverColor};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: ${colors.iconColor};
      padding: 10px 0;

      @media screen and (${breakpoints.tablet}) {
        font-size: 3rem;
      }

      @media screen and (max-width: 750px) {
        font-size: 2rem;
      }

      &:hover {
        background-color: ${darken(0.05, colors.backgroundMain)};
      }
    }
  }
`
