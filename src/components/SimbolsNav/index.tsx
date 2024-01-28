import { FiGithub } from 'react-icons/fi'
import { LuFiles } from 'react-icons/lu'
import { FaCode } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { CiSettings } from 'react-icons/ci'
import { SimbolsNavContainer } from './styles'

const SimbolsNav = () => {
  return (
    <SimbolsNavContainer>
      <div>
        <a href="#home">
          <LuFiles />
        </a>
        <a href="https://github.com/MozartSoares">
          <FiGithub />
        </a>
        <a href="#projects">
          <FaCode />
        </a>
        <a href="#contact">
          <CiMail />
        </a>
      </div>
      <div>
        <a href="#about">
          <CgProfile />
        </a>
        <a href="#">
          <CiSettings />
        </a>
      </div>
    </SimbolsNavContainer>
  )
}

export default SimbolsNav
