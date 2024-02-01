import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { lighten } from 'polished'

export const Card = styled.div`
  background: ${lighten(0.05, colors.backgroundMain)};
  color: ${colors.textWhite};
  display: block;
  border-radius: 20px;
  min-height: 100%;

  cursor: pointer;

  * {
    font-family: 'JetBrains Mono', monospace;
  }

  &:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  }

  img {
    object-fit: cover;
    background-color: ${colors.backgroundMain};
    max-height: 174px;
    min-width: 338px;
    height: 100%;
    width: 100%;
    border-radius: 6px 6px 0 0;
    cursor: auto;
  }
`
export const Content = styled.div`
  padding: 1rem;
  border-radius: 0 20px;

  p {
    max-height: 80px;
    height: 100%;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  ul {
    display: flex;
    padding: 8px;

    li {
      padding: 8px;
      margin: 1px;
      font-size: 0.75rem;
    }
  }
`
export const LinksContainer = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;

  a {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: ${colors.textWhite};
    cursor: pointer;
  }
`
