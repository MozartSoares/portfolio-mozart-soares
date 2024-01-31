import { Button } from '../../components/Buttons/styles'
import SnakeGame from '../../components/SnakeGame'
import * as S from './styles'

const Home = () => {
  return (
    <S.MainContainer>
      <S.TextContainer>
        <h1>Mozart Soares</h1>
        <h6>
          <S.TypingDiv>Desenvolvedor Web</S.TypingDiv>
        </h6>
        <p>
          Olá, me chamo Mozart e posso ser o próximo desenvolvedor da sua equipe
          <br />
          <br />
          Clique em jogar e mova-se com AWSD ou ← ↑ ↓ →
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
      <SnakeGame />
    </S.MainContainer>
  )
}

export default Home
