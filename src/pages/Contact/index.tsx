import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'

import {
  ContactContainer,
  FormContainer,
  InputContainer,
  Wrapper
} from './styles'
import { FormButton } from '../../components/Buttons/styles'

const Contact = () => {
  const [capVal, setCapVal] = useState(null)
  const [submissionStatus, setSubmissionStatus] = useState(null)
  const [displayMessage, setDisplayMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/mozartarmstrong@gmail.com',
        {
          method: 'POST',
          body: formData
        }
      )

      if (response.ok) {
        setSubmissionStatus('success')
        form.reset()
      } else {
        setSubmissionStatus('error')
      }

      setDisplayMessage(true)

      setTimeout(() => {
        setDisplayMessage(false)
      }, 10000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmissionStatus('error')
      setDisplayMessage(true)

      setTimeout(() => {
        setDisplayMessage(false)
      }, 10000)
    }
  }

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
            <a
              href="https://www.linkedin.com/in/mozart-soares"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozart Soares
            </a>
          </li>
          <li>
            <p>instagram: </p>
            <a
              href="https://www.instagram.com/zart._.abs?igsh=d2Vtd2oyZm1meW9z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zart_abs
            </a>
          </li>
          <li>
            <p>github: </p>
            <a
              href="https://github.com/MozartSoares"
              target="_blank"
              rel="noopener noreferrer"
            >
              MozartSoares
            </a>
          </li>
          <li>
            <p>email: </p>
            <a href="#">mozartarmstrong@gmail.com</a>
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
        <form onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="_captcha" value="false" />
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
          {displayMessage && (
            <>
              {submissionStatus === 'success' && (
                <p style={{ color: 'green' }}>Mensagem enviada com sucesso!</p>
              )}
              {submissionStatus === 'error' && (
                <p style={{ color: 'red' }}>
                  Erro ao enviar mensagem, tente novamente.
                </p>
              )}
            </>
          )}
          <ReCAPTCHA
            onChange={(e: string) => setCapVal(e)}
            sitekey="6Lcab2ApAAAAALUYYNHd0UvgIltUmLfD8PbGEVjP"
          />

          <FormButton type="submit" disabled={!capVal}>
            Enviar
          </FormButton>
        </form>
      </FormContainer>
    </Wrapper>
  )
}

export default Contact
