import { createGlobalStyle } from 'styled-components'

export const colors = {
  backgroundMain: '#0A0E13',
  backgroundTitleBar: '#1F2428',
  textWhite: '#FFFFFF',
  asideColor: '#011627',
  iconColor: '#6A737D'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans 3', sans-serif;
    list-style: none;
    text-decoration: none;
    overflow-y: hidden;

    body {
      background-color: ${colors.backgroundMain};
    }

  }
`
