import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const FotoPerfil = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
`

export const OverflowContainer = styled.div`
  overflow-y: scroll;
  height: 85vh;

  &::-webkit-scrollbar {
    color: ${colors.iconColor};
  }
`

export const ProfileContainer = styled.main`
  margin: 20px auto;
  max-width: 80%;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    padding-bottom: 8px;
  }

  p {
    padding: 30px 200px;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    color: ${colors.textWhite};

    span {
      color: ${colors.jsonYellow};
    }

    @media screen and (max-width: 1050px) {
      padding: 30px 100px;
    }
  }
`
export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 80%;
  margin: 0 auto;

  text-align: center;

  div {
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 0.4rem;
    padding: 0.5rem;
    letter-spacing: 0;
    cursor: pointer;
    color: ${colors.textWhite};
    text-decoration: none;
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
  max-width: 400px;
  gap: 8px;
  padding-bottom: 8px;
`
export const FormationContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.textWhite};

  ul {
    text-align: left;

    text-decoration-color: ${colors.jsonYellow};

    li {
      padding: 8px;
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
    padding: 8px;
  }
`
