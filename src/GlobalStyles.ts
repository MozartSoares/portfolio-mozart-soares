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
  jsonYellow: '#FBC02D',
  gameColor: '#48dbfb',
  buttonColor: '#48dbfb',
  iconHoverColor: '#48dbfb',
  mainColor: '#48dbfb'
}

export const breakpoints = {
  mobile: 'max-width: 600px',
  tablet: 'max-width: 1024px',
  desktop: 'max-width: 1200px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans 3', sans-serif;
    text-decoration: none;
    overflow-x: hidden;

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


    body {
      background-color: ${colors.backgroundMain};
    }

    .container {
      max-width: 85%;
      display: grid;
      flex-direction: column;
      width: 100%;
      float: right;
      max-height: 94vh;
      overflow-y: hidden;

      @media screen and (${breakpoints.tablet}) {
        max-width: 92vw;
      }
      @media screen and (${breakpoints.mobile}) {
        max-width: 90vw;
      }
    }

  }
`
