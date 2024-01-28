import { Button } from '../../components/Buttons/styles'
import SnakeGame from '../../components/SnakeGame'
import * as S from './styles'

const Home = () => {
  return (
    <S.MainContainer>
      <S.MainContentContainer>
        <S.TextContainer>
          <h1>Mozart Soares</h1>
          <S.TypingDiv>
            <h6>Desenvolvedor Front End</h6>
          </S.TypingDiv>
          <p>
            Olá, me chamo Mozart e posso ser o próximo desenvolvedor da sua
            equipe
          </p>
          <S.ButtonDiv>
            <Button to="/projects">
              <p>Ver Projetos</p>
            </Button>
            <Button to="/contact">
              <p>Contato</p>
            </Button>
          </S.ButtonDiv>
        </S.TextContainer>
        <div>
          <SnakeGame />
        </div>
      </S.MainContentContainer>
    </S.MainContainer>
  )
}

export default Home
