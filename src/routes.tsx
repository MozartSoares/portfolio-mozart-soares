import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default RoutesProvider
