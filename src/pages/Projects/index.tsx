import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import * as S from './styles'

const Projects = () => {
  const [repos, setRepos] = useState([])

  const token = import.meta.env.VITE_GITHUB_TOKEN

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`
    }
    const url =
      'https://api.github.com/search/repositories?q=user:MozartSoares+topic:portfolio'
    fetch(url, {
      method: 'GET',
      headers: headers
    })
      .then((res) => res.json())
      .then((resJson) => {
        const sortedReposByStars = resJson.items.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        )
        const fetchImageUrl = (repo) => {
          if (repo.open_issues_count > 0) {
            return fetch(
              `https://api.github.com/repos/${repo.full_name}/issues/1/comments`,
              {
                headers: headers
              }
            )
              .then((res) => res.json())
              .then((resJson) => {
                const imageUrl = resJson[0].body
                if (imageUrl) {
                  return {
                    ...repo,
                    imageUrl: imageUrl
                  }
                } else {
                  return repo
                }
              })
          } else {
            return Promise.resolve(repo)
          }
        }
        const promises = sortedReposByStars.map((repo) => fetchImageUrl(repo))
        Promise.all(promises)
          .then((updatedRepos) => {
            console.log(updatedRepos)
            setRepos(updatedRepos)
          })
          .catch((error) => {
            console.error('Error fetching image URLs:', error)
          })
      })
  }, [token])

  return (
    <S.OverflowContainer>
      <S.Wrapper>
        <h1>{}</h1>
        <p>projetos</p>
        <S.ProjectsContainer>
          <img src={''} alt="" />
          {repos.map((repo) => (
            <li key={repo.id}>
              {repo.name ? (
                <ProjectCard
                  name={repo.name}
                  description={repo.description}
                  languagesLink={repo.languages_url}
                  repoLink={repo.html_url}
                  vercelLink={repo.homepage}
                  image={repo.imageUrl || ''}
                />
              ) : null}
            </li>
          ))}
        </S.ProjectsContainer>
      </S.Wrapper>
    </S.OverflowContainer>
  )
}

export default Projects
