import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const OverflowContainer = styled.div`
  max-height: 90vh;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 2rem;
    color: ${colors.textWhite};
  }
`

export const ProjectsContainer = styled.ul`
  display: grid;
  max-width: 90%;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  margin: 1.5rem 0;
  overflow-y: auto;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }

  a {
    --color: ${colors.mainColor};
    color: ${colors.mainColor};
  }
`
