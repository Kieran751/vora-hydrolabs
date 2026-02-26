import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Configurator from './pages/Configurator'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurator" element={<Configurator />} />
      </Routes>
    </BrowserRouter>
  )
}
