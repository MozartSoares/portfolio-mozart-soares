import styled from 'styled-components'
import { breakpoints, colors } from '../../GlobalStyles'

export const FotoPerfil = styled.img`
  max-width: 240px;
  min-height: 240px;
  border-radius: 50%;
`

export const Wrapper = styled.div`
  max-height: 90vh;
`

export const ProfileContainer = styled.main`
  margin: 20px auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    margin-bottom: 0.6rem;
  }

  p {
    padding: 30px 60px;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    color: ${colors.textWhite};

    span {
      color: ${colors.jsonYellow};
    }

    @media screen and (${breakpoints.mobile}) {
      padding: 30px 20px;
    }
  }
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;

  @media screen and (${breakpoints.tablet}) {
    display: block;
  }

  div {
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 0.4rem;
    padding: 0.5rem;
    letter-spacing: 0;
    cursor: pointer;
    color: ${colors.textWhite};
    font-family: 'JetBrains Mono', monospace;
    -webkit-transition: background-size 0.25s ease-in;
    transition: background-size 0.25s ease-in;
  }
  li {
    font-family: 'JetBrains Mono', monospace;
  }
`

export const SkillsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  @media screen and (${breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
  }
`
export const FormationContainer = styled.div`
  color: ${colors.textWhite};

  ul {
    text-align: left;
    text-decoration-color: ${colors.jsonYellow};

    li {
      padding: 0.5rem;
    }
  }

  P {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
  }

  h3 {
    color: ${colors.jsonYellow};
    font-weight: bold;
    font-family: 'JetBrains Mono', monospace;
    padding: 0.5rem;
  }
`
