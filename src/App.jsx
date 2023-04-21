import './App.css'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { Router } from './components/Router'
import { Page404 } from './pages/Page404'
import { SearchPage } from './pages/SearchPage'
import { Route } from './components/Route'

function App () {
  return (
    <div className='App'>
      <Router defaultComponent={Page404}>
        <Route path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/search/:query' component={SearchPage} />
      </Router>
    </div>
  )
}

export default App
