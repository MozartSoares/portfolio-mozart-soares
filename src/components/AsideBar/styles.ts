import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { lighten } from 'polished'
import { PageIcons } from '../PagesIcons/styles'

export const AsideContainer = styled.aside`
  background-color: ${colors.asideColor};
  height: 94vh;
  max-width: 15%;
  display: grid;
  grid-template-columns: 1fr 5fr;
`

export const FilesNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FilesNavTitle = styled.div`
  width: 100%;
  background-color: ${colors.backgroundMain};
  color: ${colors.iconColor};
  height: 37px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 16px;

  span {
    cursor: pointer;
  }
`
export const FilesNavIconsContainer = styled.div`
  width: 100%;
  color: ${colors.textWhite};
  margin-top: 12px;
  font-size: 14px;
  padding: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
`
export const PageIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ce;
  margin-top: 8px;
  width: 100%;

  ${PageIcons} {
    max-width: 234px;
    display: flex;
    align-items: center;
    justify-content: start;
    line-height: 1.5em;

    &:hover {
      background-color: ${lighten(0.05, colors.asideColor)};
    }

    .is-active {
      background-color: ${lighten(0.05, colors.asideColor)};
    }
  }
`
