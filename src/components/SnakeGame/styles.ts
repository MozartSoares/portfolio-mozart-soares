import styled from 'styled-components'
import { breakpoints } from '../../GlobalStyles'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  @media screen and (${breakpoints.mobile}) {
    display: none;
  }
`
