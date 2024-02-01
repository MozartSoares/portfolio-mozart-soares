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
        const fetchImageUrl = async (repo) => {
          try {
            const releasesUrl = `https://api.github.com/repos/${repo.full_name}/releases/latest`
            const releasesResponse = await fetch(releasesUrl, { headers })
            const releaseJson = await releasesResponse.json()

            if (releaseJson.assets.length > 0) {
              const imageUrl = releaseJson.assets[0].browser_download_url
              return {
                ...repo,
                imageUrl: imageUrl
              }
            } else {
              return repo
            }
          } catch (error) {
            console.error(
              `Error fetching image URL for ${repo.full_name}:`,
              error
            )
            return repo
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

  const checkRepoImage = (repo) => {
    if (repo.name === 'Cartorio_Ebac') {
      return 'https://i.ibb.co/nDBGg4f/cartorioimage.png'
    }
    return repo.imageUrl
  }

  return (
    <S.OverflowContainer>
      <S.Wrapper>
        <h2>Projetos</h2>
        <S.ProjectsContainer>
          {repos.map((repo) => (
            <li key={repo.id}>
              {repo.name ? (
                <ProjectCard
                  name={repo.name}
                  description={repo.description}
                  languagesLink={repo.languages_url}
                  repoLink={repo.html_url}
                  vercelLink={repo.homepage}
                  image={checkRepoImage(repo)}
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
