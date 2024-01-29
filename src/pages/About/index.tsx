import { Link } from 'react-router-dom'
import * as S from './styles'
import { ButtonCV, SkillButton } from '../../components/Buttons/styles'

const About = () => {
  return (
    <S.OverflowContainer>
      <S.ProfileContainer>
        <div>
          <S.FotoPerfil
            src="https://github.com/MozartSoares.png"
            alt="Foto de perfil"
          />
          <p>
            🚀 Sobre Mim
            <br />
            <br />
            Olá me chamo Mozart 👋, sou um desenvolvedor web focado na criação
            de projetos com excelência e focados na experiência do usuário, a
            programação tem sido minha paixão e desde que entrei nessa área
            automaticamente me identifiquei pois tenho uma paixão natural por
            resolver desafios e adoro resolver problemas e pensar em novas
            maneiras e formas acerca do mesmo assunto. atualmente concentrei
            meus esfroços na área de Front-end mas também estou estudando para
            atuar como um desenvolvedor versátil desenvolvedor Full-Stack e
            poder atuar em todas as etapas do processo que tanto amo.
            <br />
            🛠️ quer saber como eu posso ser útil na sua equipe ?
            <br /> Dê uma olhada na minha aba de
            <Link to={'/projects'}>
              <span> projetos </span>
            </Link>
            onde pude colocar meus aprendizados e esforços em prática
          </p>
          <ButtonCV href="#">Baixar CV</ButtonCV>
        </div>
      </S.ProfileContainer>
      <S.GridContainer>
        <div>
          <h2>Algumas das tecnologias que domino</h2>
          <S.SkillsContainer>
            <SkillButton>HTML5</SkillButton>
            <SkillButton>CSS</SkillButton>
            <SkillButton>JavaScript</SkillButton>
            <SkillButton>Typescript</SkillButton>
            <SkillButton>ReactJS</SkillButton>
            <SkillButton>VueJS</SkillButton>
            <SkillButton>Integração com API</SkillButton>
            <SkillButton>Jquery</SkillButton>
            <SkillButton>Redux</SkillButton>
            <SkillButton>SQL</SkillButton>
            <SkillButton>Git</SkillButton>
            <SkillButton>Github</SkillButton>
            <SkillButton>NPM</SkillButton>
            <SkillButton>Jest</SkillButton>
            <SkillButton>Cypress</SkillButton>
            <SkillButton>Testes </SkillButton>
            <SkillButton>Task runners</SkillButton>
            <SkillButton>Gulp</SkillButton>
            <SkillButton>Grunt</SkillButton>
            <SkillButton>SCSS</SkillButton>
            <SkillButton>Less</SkillButton>
            <SkillButton>Entre outras ...</SkillButton>
          </S.SkillsContainer>
        </div>
        <div>
          <S.FormationContainer>
            <h2>Formação</h2>
            <p>
              Adquirí meus conhecimentos através de diversas fontes mas entre
              elas as mais expressivas para minha evolução foram:
            </p>
            <ul>
              <li>
                <h3>
                  T.I do Zero ao Pro - EBAC Escola Britânica de Artes, ciência e
                  tecnologia
                </h3>
                <p>
                  Esse foi o curso responsável por alavancar de vez meus
                  conhecimentos sobre programação e me engajar no mercado de
                  trabalho, nele aprendí todos os aspectos do desenvolvimento e
                  do mundo da tecnologia aprendendo sobre cada etapa e função
                  existente na realização de um projeto passando por cada uma
                  das profissões e nos introduzindo a cada uma delas aprendi
                  sobre diversos conceitos essenciais desde a lógica em C,
                  manipulação de dados, criação de telas até a importância da
                  quality assurance e metodologias ágeis.
                </p>
              </li>
              <li>
                <h3>
                  Desenvolvedor Full Stack Python - EBAC Escola Britânica de
                  Artes, ciência e tecnologia
                </h3>
                <p>
                  Ao fim de meu curso de T.I do zero ao pro me encantei com a
                  programação e o desenvolvimento de software assim decidi optar
                  por atuar como um desenvolvedor full stack, nesse curso
                  aprendí sobre como desenvolver aplicações e organizá-las com
                  profissionais reais do mercado, em que em cada etapa aprendí
                  sobre tecnologias, métodos e boas práticas desde a base com
                  HTML e Css até o uso de frameworks modernos e integrações de
                  api.
                </p>
              </li>
              <li>
                <h3>Software Development BYU - Idaho</h3>
                <p>
                  A programação mudou tanto minha vida que decidí realizar
                  também um curso superior na área e atualmente estou
                  participando do programa de graduação da BYU - Idaho, uma
                  universidade americana que já foi reconhecida como uma das 20
                  melhores do mundo.
                </p>
              </li>
            </ul>
          </S.FormationContainer>
        </div>
      </S.GridContainer>
    </S.OverflowContainer>
  )
}

export default About
