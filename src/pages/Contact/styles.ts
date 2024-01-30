import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px;
  max-width: 100%;
  margin: 0 auto;
  color: black;
  gap: 2rem;
  color: #fff;

  * {
    font-family: 'JetBrains Mono', monospace;
  }

  h3 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.17em;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`

export const ContactContainer = styled.div`
  border-right: 1px solid ${colors.mainColor};
  font-size: 1.2rem;
  line-height: 1.8em;

  ol {
    color: ${colors.textWhite};
    counter-reset: line;
    margin: 0 auto;

    div {
      display: flex;
      justify-content: start;

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
  }
`

export const InputContainer = styled.div`
  display: flex;
  grid-gap: 1rem;
  gap: 1rem;
`
