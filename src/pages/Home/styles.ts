import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  row-gap: 8px;
  color: ${colors.textWhite};
  height: 80%;
  font-family: 'JetBrains Mono', monospace;

  h1 {
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
    font-size: 3.5rem;
  }

  h6 {
    font-size: 1.5rem;
    font-weight: 300;
    max-width: 100%;
  }

  p {
    font-size: 1rem;
  }
`
export const TypingDiv = styled.div`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation:
    typing 3s normal,
    blink-caret 0.5s infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 61%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`

export const MainContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonDiv = styled.div`
  display: flex;
  margin-top: 32px;
  width: 100%;
  justify-content: space-evenly;
`
