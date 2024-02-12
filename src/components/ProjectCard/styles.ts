import styled from 'styled-components'
import { breakpoints, colors } from '../../GlobalStyles'
import { lighten } from 'polished'

export const Card = styled.div`
  background: ${lighten(0.05, colors.backgroundMain)};
  color: ${colors.textWhite};
  border-radius: 20px;
  min-height: 100%;
  cursor: pointer;

  * {
    font-family: 'JetBrains Mono', monospace;
  }

  &:hover {
    transform: scale(0.99);
  }

  img {
    object-fit: cover;
    background-color: ${colors.backgroundMain};
    height: 174px;
    max-width: 338px;
    width: 100%;
    border-radius: 6px 6px 0 0;
    cursor: auto;

    @media screen and (${breakpoints.tablet}) {
      max-width: 100%;
    }
  }
`
export const Content = styled.div`
  padding: 1rem;
  border-radius: 0 20px;

  p {
    height: 80px;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  ul {
    display: flex;
    padding: 0.5rem;

    li {
      padding: 0.5rem;
      margin: 1px;
      font-size: 0.75rem;
    }
  }
`
export const LinksContainer = styled.div`
  display: grid;
  gap: 1rem;

  a {
    text-align: center;
    font-size: 0.9rem;
    color: ${colors.textWhite};
    cursor: pointer;
  }
`
