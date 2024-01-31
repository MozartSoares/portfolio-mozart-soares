import { FiGithub } from 'react-icons/fi'
import { LuFiles } from 'react-icons/lu'
import { FaCode } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { CiSettings } from 'react-icons/ci'
import { SimbolsNavContainer } from './styles'
import { Link, useLocation } from 'react-router-dom'

const SimbolsNav = () => {
  const location = useLocation()

  return (
    <SimbolsNavContainer>
      <div>
        <Link
          to="/"
          className={`element ${location.pathname === '/' ? 'is-active' : ''}`}
        >
          <LuFiles />
        </Link>
        <a
          href="https://github.com/MozartSoares"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <Link
          to="/projects"
          className={`element ${location.pathname === '/projects' ? 'is-active' : ''}`}
        >
          <FaCode />
        </Link>
        <Link
          to="/contact"
          className={`element ${location.pathname === '/contact' ? 'is-active' : ''}`}
        >
          <CiMail />
        </Link>
      </div>
      <div>
        <Link
          to="/about"
          className={`element ${location.pathname === '/about' ? 'is-active' : ''}`}
        >
          <CgProfile />
        </Link>
        <a href="#">
          <CiSettings />
        </a>
      </div>
    </SimbolsNavContainer>
  )
}

export default SimbolsNav
