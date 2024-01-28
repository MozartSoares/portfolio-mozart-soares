import { lighten } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const colors = {
  backgroundMain: '#0A0E13',
  backgroundTitleBar: '#1F2428',
  textWhite: '#FFFFFF',
  asideColor: `${lighten(0.03, '#0A0E13')}`,
  iconColor: '#6A737D',
  reactBlue: '#00BCD4',
  htmlRed: '#C94624',
  cssBlue: '#42A5F4',
  jsonYellow: '#FBC02D'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans 3', sans-serif;
    list-style: none;
    text-decoration: none;
    overflow: hidden;

    body {
      background-color: ${colors.backgroundMain};
    }

  }
`
