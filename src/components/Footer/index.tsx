import { FooterContainer } from './styles'
import { IoIosGitBranch } from 'react-icons/io'
import { CiBellOn } from 'react-icons/ci'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a
          title="Clique aqui para visualizar o repositório desse portfólio =)"
          href="https://github.com/MozartSoares/portfolio-mozart-soares"
          target="_blank"
          rel="noopener noreferrer"
        >
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
