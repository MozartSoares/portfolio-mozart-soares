import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const TitleBarContainer = styled.section`
  background-color: ${colors.backgroundTitleBar};
  display: flex;
  color: ${colors.textWhite};
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  width: 100%;
  height: 30px;
  padding: 8px;
  text-align: center;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    img {
      width: 15px;
      height: 15px;
    }

    p {
      padding: 0px 8px;
      cursor: pointer;
    }

    h1 {
      margin: 0 auto;
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
  margin-left: 8px;
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
