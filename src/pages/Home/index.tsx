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
            <S.TypingDiv>Desenvolvedor Full Stack</S.TypingDiv>
          </h6>
          <p>
            Olá, me chamo Mozart e posso ser o próximo desenvolvedor para seus
            projetos
            <br className="invisible-on-mobile" />
            <br className="invisible-on-mobile" />
            <span className="invisible-on-mobile">
              Clique em jogar e mova-se com AWSD ou ← ↑ ↓ →
            </span>
          </p>
          <S.ButtonDiv>
            <Button className="only-visible-on-mobile" to="/about">
              <p>Sobre mim 👋</p>
            </Button>
            <Button to="/projects">
              <p>Ver Projetos 🛠️</p>
            </Button>
            <Button to="/contact">
              <p>Contato 📱</p>
            </Button>
          </S.ButtonDiv>
        </S.TextContainer>
        <SnakeGame />
      </S.MainContainer>
    </S.Wrapper>
  )
}

export default Home
