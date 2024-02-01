import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'

import TitleBar from './components/VscodeHeader'
import Aside from './components/AsideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import RoutesProvider from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <TitleBar />
      <BrowserRouter>
        <div className="container">
          <Header />
          <RoutesProvider />
        </div>
        <Aside />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
