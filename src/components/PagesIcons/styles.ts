import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const PageIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  max-width: 145px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  p {
    font-size: 0.9rem;
    color: ${colors.textWhite};
  }
`
