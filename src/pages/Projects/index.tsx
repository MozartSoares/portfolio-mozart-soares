import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import * as S from './styles'

// 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 token

const Projects = () => {
  const [repos, setRepos] = useState([])
  //github.com/stars/MozartSoares/lists/portfoliorepos
  useEffect(() => {
    const headers = {
      Authorization: `Token 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`
    }
    const url =
      'https://api.github.com/search/repositories?q=user:MozartSoares+topic:portfolio'
    fetch(url, {
      method: 'GET',
      headers: headers
    })
      .then((res) => res.json())
      .then((resJson) => {
        const sortedRepos = resJson.items.sort((a, b) => {
          if (b.pinned && !a.pinned) return 1
          if (a.pinned && !b.pinned) return -1
          return b.stargazers_count - a.stargazers_count
        })
        setRepos(sortedRepos)
        console.log(resJson)
      })
  }, [])
  // stargazers_count: 1 = stars
  return (
    <S.OverflowContainer>
      <S.Wrapper>
        <h1>{}</h1>
        <p>projetos</p>
        <S.ProjectsContainer>
          {repos.map((repo) => (
            <li key={repo.id}>
              <ProjectCard
                name={repo.name}
                description={repo.description}
                languagesLink={repo.languages_url}
                repoLink={repo.html_url}
                vercelLink={repo.homepage}
                image={''}
              />
            </li>
          ))}
        </S.ProjectsContainer>
      </S.Wrapper>
    </S.OverflowContainer>
  )
}

export default Projects
