import { Link } from 'react-router-dom'
import * as S from './styles'
import { ButtonCV, SkillButton } from '../../components/Buttons/styles'
import curriculum from '../../assets/CV.pdf'

const About = () => {
  return (
    <S.Wrapper>
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
            Olá, sou Mozart, um desenvolvedor Full Stack apaixonado por criar
            projetos excepcionais e proporcionar ótimas experiências aos
            usuários. Minha jornada na programação começou com um interesse
            intrínseco em resolver desafios, e desde então tenho dedicado meu
            tempo e energia para aprimorar minhas habilidades em todas as áreas
            do desenvolvimento web. Com mais de 40 projetos concluídos,
            incluindo trabalhos pessoais, freelancers e voluntários, acumulei
            uma ampla experiência e expertise em ambas as frentes: front-end e
            back-end. Tive o privilégio de liderar equipes de até três
            desenvolvedores, colaborar diretamente com CEOs de negócios para
            entender os requisitos do projeto e manter uma comunicação constante
            com os clientes para garantir sua satisfação. Minhas experiências
            refletem meu compromisso contínuo com a aprendizagem e aprimoramento
            profissional. Estou sempre em busca de novas maneiras de superar
            desafios e aperfeiçoar minhas habilidades. Portanto, estou
            procurando uma empresa que compartilhe esses valores e me ofereça
            oportunidades para crescer e expandir meu conhecimento em diferentes
            áreas. Se você está em busca de um desenvolvedor talentoso,
            adaptável e comprometido em proporcionar resultados excepcionais,
            estou pronto para contribuir com o sucesso da sua ideia.
            <br />
            🛠️ quer saber como eu posso ser útil e contribuir para seu projeto ?
            <br /> Dê uma olhada na minha aba de
            <Link to={'/projects'}>
              <span> projetos </span>
            </Link>
            onde pude colocar meus aprendizados e esforços em prática
          </p>
          <ButtonCV href={curriculum} target="_blank">
            Visualizar CV
          </ButtonCV>
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
            <SkillButton>Angular</SkillButton>
            <SkillButton>VueJS</SkillButton>
            <SkillButton>NodeJs</SkillButton>
            <SkillButton>Python</SkillButton>
            <SkillButton>Django</SkillButton>
            <SkillButton>PHP</SkillButton>
            <SkillButton>Yii2</SkillButton>
            <SkillButton>Integração com API</SkillButton>
            <SkillButton>Jquery</SkillButton>
            <SkillButton>Redux</SkillButton>
            <SkillButton>SQL</SkillButton>
            <SkillButton>Git</SkillButton>
            <SkillButton>Github</SkillButton>
            <SkillButton>NPM</SkillButton>
            <SkillButton>Bootstrap</SkillButton>
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
              Adquiri meus conhecimentos através de diversas fontes mas entre
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
    </S.Wrapper>
  )
}

export default About
