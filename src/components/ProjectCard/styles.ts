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
    height: 100%;
    width: 100%;
    border-radius: 6px 6px 0 0;
    cursor: auto;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: start;
  padding: 1rem;
  border-radius: 0 20px;

  p {
    overflow-y: auto;
    max-height: 70px;
    height: 100%;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    &::-webkit-scrollbar {
      width: 3px;
      background-color: #202020;
    }
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 14px;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #202020;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;

    li {
      padding: 8px;
      flex-wrap: wrap;
      margin: 1px;
      font-size: 0.75rem;
    }
  }
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.9rem;
    cursor: pointer;
  }
`
