// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Informations from './pages/Informations'
import Programmation from './pages/Programmation'
import Activites from './pages/Activites'
import Restauration from './pages/Restauration'
import Hebergement from './pages/Hebergement'
import Galerie from './pages/Galerie'
import Error from './components/Error'
import initScrollFadeIn from './components/Scroll-fade-in'

function App() {
  const location = useLocation()

  useEffect(() => {
    initScrollFadeIn()
  }, [location.pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/restauration" element={<Restauration />} />
        <Route path="/hebergement" element={<Hebergement />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
