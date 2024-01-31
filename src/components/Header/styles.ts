import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const HeaderContainer = styled.header`
  float: right;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 85%;
  height: 36px;

  .is-active {
    background-color: ${colors.backgroundTitleBar};
    border-bottom: 2px solid ${colors.mainColor};
  }
`
