import styled from 'styled-components'
import { breakpoints, colors } from '../../GlobalStyles'
import { lighten } from 'polished'
import { PageIcons } from '../PagesIcons/styles'

export const AsideContainer = styled.aside`
  background-color: ${colors.asideColor};
  height: 94vh;
  width: auto;
  display: grid;
  grid-template-columns: 1fr 4fr;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    border-right: 2px solid ${colors.asideColor};
  }
`

export const FilesNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }

  @media screen and(${breakpoints.tablet}) {
  }
`
export const FilesNavTitle = styled.div`
  width: 100%;
  background-color: ${colors.backgroundMain};
  color: ${colors.iconColor};
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;

  span {
    cursor: pointer;
  }
`
export const FilesNavIconsContainer = styled.div`
  width: 100%;
  color: ${colors.textWhite};
  margin-top: 0.75rem;
  font-size: 1rem;
  padding: 0.5rem;

  @media screen and (${breakpoints.tablet}) {
  }

  div {
    display: flex;
    align-items: start;
    cursor: pointer;
  }
`
export const PageIconsContainer = styled.div`
  flex-direction: column;
  margin-top: 0.5em;
  width: 100%;
  overflow: hidden;

  ${PageIcons} {
    max-width: 234px;
    display: flex;
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
