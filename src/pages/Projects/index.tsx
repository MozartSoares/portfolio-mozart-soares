import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import * as S from './styles'

import Loader from '../../components/Loader'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'

type Repo = {
  id: number
  name: string
  description: string
  languages_url: string
  html_url: string
  homepage: string
  full_name: string
  assets: [
    {
      browser_download_url: string
    }
  ]
  imageUrl: string
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
        const allOrdenatedRepos: Repo[] = resJson.items.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        const fetchImageUrl = async (repo: Repo) => {
          const releasesUrl = `https://api.github.com/repos/${repo.full_name}/releases/latest`
          const releasesRes = await fetch(releasesUrl, { headers })
          const releasesJson: Repo = await releasesRes.json()

          if (repo.name === 'Cartorio_Ebac') {
            return {
              ...repo,
              imageUrl: 'https://i.ibb.co/nDBGg4f/cartorioimage.png'
            }
          } else {
            return {
              ...repo,
              imageUrl: releasesJson.assets[0].browser_download_url
            }
          }
        }
        const promises = allOrdenatedRepos.map((repo) => fetchImageUrl(repo))
        Promise.all(promises).then((updatedRepos) => {
          setRepos(updatedRepos)
          setIsLoading(false)
        })
      })
  }, [token])

  return (
    <S.OverflowContainer>
      <S.Wrapper>
        {isLoading ? (
          <div className="loader-container">
            <Loader size={50} />
          </div>
        ) : (
          <>
            <h2>Projetos Freelancer</h2>
            <S.ProjectsContainer>
              <ul>
                <li>
                  <ProjectCard
                    name={'Banco Bet'}
                    description={'descricao'}
                    languagesLink={''}
                    repoLink={''}
                    vercelLink={''}
                    image={''}
                    children="Ver mais detalhes"
                  />
                </li>
              </ul>
            </S.ProjectsContainer>
            <hr style="width: 100%;" />
            <S.ProjectsContainer>
              {repos.map((repo: Repo) => {
                return (
                  <li s key={repo.name}>
                    <ProjectCard
                      name={repo.name}
                      description={repo.description}
                      languagesLink={repo.languages_url}
                      repoLink={repo.html_url}
                      vercelLink={repo.homepage}
                      image={repo.imageUrl}
                      children="Ver Repositório"
                    />
                  </li>
                )
              })}
            </S.ProjectsContainer>
          </>
        )}
      </S.Wrapper>
    </S.OverflowContainer>
  )
}

export default Projects
