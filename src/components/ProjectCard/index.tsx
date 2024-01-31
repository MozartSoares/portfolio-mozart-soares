import { useEffect, useState } from 'react'
import { ButtonCV as ButtonLink, SkillButton as Tag } from '../Buttons/styles'
import * as S from './styles'

type Props = {
  name: string
  description: string
  languagesLink: string
  repoLink: string
  vercelLink?: string
  image: string
  stars?: number
}

const ProjectCard = ({
  description,
  image,
  languagesLink,
  name,
  repoLink,
  vercelLink
}: Props) => {
  const [languageTags, setLanguageTags] = useState<string[]>([])

  useEffect(() => {
    const headers = {
      Authorization: `Token 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`
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
  }, [languageTags, languagesLink])

  return (
    <S.Card>
      <img src={'https://via.placeholder.com/100x100'} alt={'foto'} />
      <S.Content>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {languageTags.map((language) => (
            <Tag key={language}>{language}</Tag>
          ))}
        </ul>
        <S.LinksContainer>
          <ButtonLink href={repoLink} target="_blank" rel="noopener noreferrer">
            Repositório
          </ButtonLink>
          {vercelLink && (
            <ButtonLink
              href={vercelLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver deploy
            </ButtonLink>
          )}
        </S.LinksContainer>
      </S.Content>
    </S.Card>
  )
}
export default ProjectCard
