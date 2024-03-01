import styled from 'styled-components'
import { breakpoints, colors } from '../../GlobalStyles'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  margin: 0 auto;
  gap: 2rem;
  color: ${colors.textWhite};
  max-height: 90vh;
  overflow-y: auto;

  @media screen and (max-width: 1200px) {
    display: block;
    margin: 0;
  }

  * {
    font-family: 'JetBrains Mono', monospace;
  }

  h3 {
    font-size: 1.17em;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`

export const ContactContainer = styled.div`
  border-right: 2px solid ${colors.mainColor};
  font-size: 1.2rem;
  line-height: 1.8em;

  @media screen and (max-width: 1200px) {
    border-right: none;
    padding-bottom: 1rem;
  }

  @media screen and (${breakpoints.mobile}) {
    font-size: 0.85rem;
    line-height: 1.5rem;
  }

  ol {
    color: ${colors.textWhite};
    counter-reset: line;
    margin: 0 auto;

    div {
      p {
        color: ${colors.mainColor};
        span {
          color: ${colors.textWhite};
        }

        &::before {
          content: counter(line);
          counter-increment: line;
          margin-right: 1rem;
          color: grey;
        }
      }
    }

    li {
      display: flex;
      justify-content: left;

      &::before {
        content: counter(line);
        counter-increment: line;
        margin-right: 1rem;
        color: grey;
      }

      p {
        margin-left: 1.1em;
      }

      a {
        color: ${colors.mainColor};
        margin: 0 1em;

        &:hover {
          text-decoration: underline 1px solid ${colors.mainColor};
        }
        &:after {
          color: ${colors.textWhite};
          content: ';';
        }
      }
    }
  }
`
export const FormContainer = styled.div`
  font-size: 1.2rem;

  p {
  }

  form {
    display: grid;
    row-gap: 0.5em;

    label {
      font-family: 'JetBrains Mono', monospace;
      display: block;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.8rem;
    }

    input,
    textarea {
      border: 2px solid transparent;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      padding: 0.75rem;
      width: 100%;
      resize: none;
      background-color: ${colors.asideColor};
      color: ${colors.textWhite};

      &:-webkit-autofill {
        background-color: ${colors.backgroundMain};
      }

      &:-moz-placeholder {
        background-color: ${colors.backgroundMain};
      }

      &:focus-visible {
        outline: none;
        border: 2px solid ${colors.mainColor};
      }
    }

    @media screen and (${breakpoints.mobile}) {
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (${breakpoints.mobile}) {
    display: block;
  }
`
