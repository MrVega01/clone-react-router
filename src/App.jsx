import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Home page for example to create a mini React Router</p>
      <a href='/about'>About</a>
    </>
  )
}
function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <p>Hello! I'm José Vega and I'm creating a clone of React Router</p>
        <img src='https://media.licdn.com/dms/image/C4E03AQFJnnpu4hNqYQ/profile-displayphoto-shrink_800_800/0/1642480100351?e=1687392000&v=beta&t=cKv6eQQBw0qjLhRWgrZQ95nZ-DvkJOBzvjr8w-xLBHk' alt='Photo of José Vega' />
      </div>
      <a href='/'>Home</a>

    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <div className='App'>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}

export default App
