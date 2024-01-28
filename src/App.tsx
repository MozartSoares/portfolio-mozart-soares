import { GlobalStyle } from './GlobalStyles'
import TitleBar from './components/VscodeHeader'
import Aside from './components/AsideBar'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <TitleBar />
      <Header />
      <Aside />
      <Footer />
    </>
  )
}

export default App
