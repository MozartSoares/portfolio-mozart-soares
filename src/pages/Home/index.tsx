import { Button } from '../../components/Buttons/styles'
import SnakeGame from '../../components/SnakeGame'
import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <S.MainContainer>
        <S.TextContainer>
          <h1>Mozart Soares</h1>
          <h6>
            <S.TypingDiv>Desenvolvedor Web</S.TypingDiv>
          </h6>
          <p>
            Olá, me chamo Mozart e posso ser o próximo desenvolvedor para seus
            projetos
            <br />
            <br />
            <span className="need-keyboard">
              * Para jogar você precisará de um teclado
              <br />
              <br />
            </span>
            <span>Clique em jogar e mova-se com AWSD ou ← ↑ ↓ →</span>
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
    </S.Wrapper>
  )
}

export default Home
