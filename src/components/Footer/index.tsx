import { FooterContainer } from './styles'
import { IoIosGitBranch } from 'react-icons/io'
import { CiBellOn } from 'react-icons/ci'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="https://github.com/MozartSoares/portfolio-mozart-soares">
          <IoIosGitBranch />
          main
        </a>
      </div>
      <div>
        <CiBellOn />
      </div>
    </FooterContainer>
  )
}

export default Footer
