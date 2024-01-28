import { useState } from 'react'

import { colors } from '../../GlobalStyles'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { VscJson } from 'react-icons/vsc'
import { PageIconsContainer } from './styles'

const PagesIcons = () => {
  const [activeElement, setActiveElement] = useState('')

  const handleClick = (element: string) => {
    setActiveElement(element)
  }

  return (
    <>
      <PageIconsContainer
        className={`element ${activeElement === 'home' ? 'is-active' : ''}`}
        onClick={() => handleClick('home')}
      >
        <FaReact color={colors.reactBlue} />
        <p>home.jsx</p>
      </PageIconsContainer>
      <PageIconsContainer
        className={`element ${activeElement === 'sobre' ? 'is-active' : ''}`}
        onClick={() => handleClick('sobre')}
      >
        <FaHtml5 color={colors.htmlRed} />
        <p>sobre.html</p>
      </PageIconsContainer>
      <PageIconsContainer
        className={`element ${activeElement === 'contato' ? 'is-active' : ''}`}
        onClick={() => handleClick('contato')}
      >
        <FaCss3 color={colors.cssBlue} />
        <p>contato.css</p>
      </PageIconsContainer>
      <PageIconsContainer
        className={`element ${activeElement === 'projetos' ? 'is-active' : ''}`}
        onClick={() => handleClick('projetos')}
      >
        <VscJson color={colors.jsonYellow} />
        <p>projetos.json</p>
      </PageIconsContainer>
    </>
  )
}

export default PagesIcons
