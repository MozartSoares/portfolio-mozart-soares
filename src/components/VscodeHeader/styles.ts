import styled from 'styled-components'
import { breakpoints, colors } from '../../GlobalStyles'

export const TitleBarContainer = styled.section`
  background-color: ${colors.backgroundTitleBar};
  display: flex;
  color: ${colors.textWhite};
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  width: 100%;
  height: 2.5vh;
  padding: 0.5rem;
  text-align: center;
  overflow: hidden;

  img {
    width: 15px;
    height: 15px;
  }

  .texts-container {
    @media screen and (${breakpoints.tablet}) {
      display: none;
    }
  }

  .only-mobile {
    display: none;
    @media screen and (${breakpoints.tablet}) {
      display: flex;
      align-items: start;
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    p {
      padding: 0 0.5rem;
      cursor: pointer;
    }

    h1 {
      font-size: 0.85rem;
      font-weight: normal;
      white-space: nowrap;
    }
  }

  .circleContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

export const Circle = styled.span`
  height: 13px;
  width: 13px;
  margin-left: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.color) {
      case 'red':
        return '#FF5655'
      case 'green':
        return '#4FFA7B'
      case 'yellow':
        return '#F1FA8C'
    }
  }};
  cursor: pointer;
`
