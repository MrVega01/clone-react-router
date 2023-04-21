import './App.css'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { Router } from './components/Router'
import { Page404 } from './pages/Page404'
import { Search } from './pages/Search'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/search/:query',
    component: Search
  }
]

function App () {
  return (
    <div className='App'>
      <Router routes={routes} defaultComponent={Page404} />
    </div>
  )
}

export default App
