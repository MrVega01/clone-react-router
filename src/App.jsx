import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './utils/constants'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPathChanged = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSH_STATE, onPathChanged)
    window.addEventListener(EVENTS.POP_STATE, onPathChanged)

    return () => {
      window.removeEventListener(EVENTS.PUSH_STATE, onPathChanged)
      window.removeEventListener(EVENTS.POP_STATE, onPathChanged)
    }
  }, [])

  return (
    <div className='App'>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}

export default App
