import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 3vh;
  overflow: hidden;
  font-family: 'source sans';
  font-size: 1rem;

  div {
    display: flex;
    margin: 0 0.5rem;
    color: ${colors.textWhite};
    a {
      color: ${colors.textWhite};

      @media screen and (max-width: 750px) {
        font-size: 0.8rem;
      }
    }
  }
`
