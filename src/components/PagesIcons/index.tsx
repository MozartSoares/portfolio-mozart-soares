import { colors } from '../../GlobalStyles'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { VscJson } from 'react-icons/vsc'
import { PageIcons } from './styles'
import { useLocation } from 'react-router-dom'

const PagesIcons = () => {
  const location = useLocation()

  return (
    <>
      <PageIcons
        to="/"
        className={`element ${location.pathname === '/' ? 'is-active' : ''}`}
      >
        <FaReact color={colors.reactBlue} />
        <p>home.jsx</p>
      </PageIcons>
      <PageIcons
        to="/about"
        className={`element ${location.pathname === '/about' ? 'is-active' : ''}`}
      >
        <FaHtml5 color={colors.htmlRed} />
        <p>sobre.html</p>
      </PageIcons>
      <PageIcons
        to="/contact"
        className={`element ${location.pathname === '/contact' ? 'is-active' : ''}`}
      >
        <FaCss3 color={colors.cssBlue} />
        <p>contato.css</p>
      </PageIcons>
      <PageIcons
        to="/projects"
        className={`element ${location.pathname === '/projects' ? 'is-active' : ''}`}
      >
        <VscJson color={colors.jsonYellow} />
        <p>projetos.json</p>
      </PageIcons>
    </>
  )
}

export default PagesIcons
