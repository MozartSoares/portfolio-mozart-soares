import { GlobalStyle } from './GlobalStyles'
import TitleBar from './components/VscodeHeader'
import Aside from './components/AsideBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <TitleBar />
      <Aside />
      <Footer />
    </>
  )
}

export default App
