import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { Link } from 'react-router-dom'

export const PageIcons = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 145px;
  height: 100%;

  border-bottom: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  p {
    font-size: 0.9rem;
    color: ${colors.textWhite};
    margin: 0;
  }
`
