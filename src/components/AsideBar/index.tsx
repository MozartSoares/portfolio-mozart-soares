import { useState } from 'react'
import SimbolsNav from '../SimbolsNav'
import * as S from './styles'
import { RiArrowDownSLine } from 'react-icons/ri'
import { MdKeyboardArrowRight } from 'react-icons/md'
import PagesIcons from '../PagesIcons'
import { useLocation } from 'react-router-dom'

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.AsideContainer>
      <SimbolsNav />
      <S.FilesNav>
        <S.FilesNavTitle>
          <p>EXPLORER</p>
          <span>...</span>
        </S.FilesNavTitle>
        <S.FilesNavIconsContainer>
          <div onClick={toggleDropdown}>
            {isOpen ? <RiArrowDownSLine /> : <MdKeyboardArrowRight />}
            <p>PORTFOLIO</p>
          </div>
          <S.PageIconsContainer>
            {isOpen ? <PagesIcons /> : <></>}
          </S.PageIconsContainer>
        </S.FilesNavIconsContainer>
      </S.FilesNav>
    </S.AsideContainer>
  )
}

export default Aside
