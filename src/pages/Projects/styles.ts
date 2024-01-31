import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const OverflowContainer = styled.div`
  overflow-y: scroll;
  max-height: 90vh;

  &::-webkit-scrollbar {
    color: ${colors.iconColor};
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProjectsContainer = styled.ul`
  display: grid;
  max-width: 90%;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  margin: 1.5rem 0;
  overflow-y: auto;
`
