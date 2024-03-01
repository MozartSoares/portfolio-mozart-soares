import styled from 'styled-components'
import { breakpoints, colors } from '../../GlobalStyles'

export const Wrapper = styled.div`
  max-height: 90vh;
`

export const MainContainer = styled.main`
  max-width: 95%;
  width: 100%;
  margin: 5rem auto;
  justify-content: space-evenly;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1380px) {
    flex-direction: column;
    row-gap: 5rem;
  }

  .only-visible-on-mobile {
    display: none;
  }

  @media screen and (${breakpoints.mobile}) {
    margin: 3rem auto;
    .invisible-on-mobile {
      display: none;
    }
    .only-visible-on-mobile {
      display: flex;
    }
  }

  span {
    color: ${colors.jsonYellow};
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  row-gap: 0.5rem;
  color: ${colors.textWhite};
  font-family: 'JetBrains Mono', monospace;

  h1 {
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
    font-size: 3.5rem;
  }

  h6 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    font-weight: 300;
  }

  p {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    text-align: left;

    span {
      font-family: 'JetBrains Mono', monospace;
    }
  }

  @media screen and (max-width: 380px) {
    max-width: 90%;

    h1 {
      font-size: 3rem;
    }
    h6 {
      font-size: 1.15rem;
    }
  }
`
export const TypingDiv = styled.div`
  display: flex;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation:
    typing 2s ease-in-out,
    blink-caret 0.5s infinite;
  font-family: 'JetBrains Mono', monospace;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
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

export const ButtonDiv = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 2rem;
  }
`
