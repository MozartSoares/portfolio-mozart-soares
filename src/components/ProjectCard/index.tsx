import { useEffect, useState } from 'react'
import { ButtonCV as ButtonLink, SkillButton as Tag } from '../Buttons/styles'
import * as S from './styles'

type Props = {
  name: string
  description: string
  languagesLink?: string
  repoLink: string
  vercelLink?: string
  image?: string
  children: string
  freelance?: boolean
}

const ProjectCard = ({
  description,
  image,
  languagesLink,
  name,
  repoLink,
  vercelLink,
  children,
  freelance
}: Props) => {
  const [languageTags, setLanguageTags] = useState<string[]>([])

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN
    const headers = {
      Authorization: `Bearer ${token}`
    }
    const url = languagesLink
    fetch(url, {
      method: 'GET',
      headers: headers
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson && typeof resJson === 'object') {
          const languagesArray = Object.keys(resJson)
          setLanguageTags(languagesArray)
        }
      })
  }, [languagesLink])
  return (
    <S.Card>
      <img src={image} alt={`Preview do projeto ${name}`} />
      <S.Content>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {freelance && <Tag>Projeto freelancer</Tag>}
          {languageTags.map((language) => (
            <Tag key={language}>{language}</Tag>
          ))}
        </ul>
        <S.LinksContainer>
          <ButtonLink href={repoLink} target="_blank" rel="noopener noreferrer">
            {children}
          </ButtonLink>
          {vercelLink && (
            <ButtonLink
              href={vercelLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar Projeto
            </ButtonLink>
          )}
        </S.LinksContainer>
      </S.Content>
    </S.Card>
  )
}
export default ProjectCard
