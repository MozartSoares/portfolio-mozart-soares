import ReCAPTCHA from 'react-google-recaptcha'

import {
  ContactContainer,
  FormContainer,
  InputContainer,
  Wrapper
} from './styles'
import { FormButton } from '../../components/Buttons/styles'

const Contact = () => {
  return (
    <Wrapper>
      <ContactContainer>
        <h3>Minhas Redes Sociais </h3>
        <ol start={1}>
          <div>
            <p>
              .redes <span>{'{'}</span>
            </p>
          </div>
          <li>
            <p>linkedin: </p>
            <a href="www.linkedin.com/in/mozart-soares">Mozart Soares</a>
          </li>
          <li>
            <p>instagram: </p>
            <a href="https://www.instagram.com/zart._.abs?igsh=d2Vtd2oyZm1meW9z">
              Zart_abs
            </a>
          </li>
          <li>
            <p>github: </p>
            <a href="https://github.com/MozartSoares">MozartSoares</a>
          </li>
          <li>
            <p>email: </p>
            <a href="mailto:mozartarmstrong@gmail.com">
              mozartarmstrong@gmail.com
            </a>
          </li>
          <li>
            <p>whatsapp: </p>
            <a href="#">(81)99930-0708</a>
          </li>
          <li>{'}'}</li>
        </ol>
      </ContactContainer>
      <FormContainer>
        <h3>Ou Entre Em Contato Por Aqui</h3>
        <form
          action="https://formsubmit.co/mozartarmstrong@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.co/thanks.html"
          />
          <InputContainer>
            <div>
              <label htmlFor="name">nome</label>
              <input required name="nome" id="name" type="text" />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input required name="email" id="email" type="email" />
            </div>
          </InputContainer>
          <div>
            <label htmlFor="subject">assunto</label>
            <input required name="assunto" id="subject" type="text" />
          </div>
          <div>
            <label htmlFor="message">mensagem</label>
            <textarea
              required
              name="mensagem"
              id="message"
              cols={30}
              rows={10}
            />
          </div>
          <ReCAPTCHA sitekey="6Lcab2ApAAAAALUYYNHd0UvgIltUmLfD8PbGEVjP" />
          <FormButton>Enviar</FormButton>
        </form>
      </FormContainer>
    </Wrapper>
  )
}

export default Contact
