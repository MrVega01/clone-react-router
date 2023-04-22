import { Suspense, lazy } from 'react'

import './App.css'

import { Router } from './components/Router'
import { Route } from './components/Route'

const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAboutPage = lazy(() => import('./pages/About'))
const LazySearchPage = lazy(() => import('./pages/SearchPage'))
const LazyPage404 = lazy(() => import('./pages/Page404'))

function App () {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <Router defaultComponent={LazyPage404}>
          <Route path='/' component={LazyHomePage} />
          <Route path='/about' component={LazyAboutPage} />
          <Route path='/search/:query' component={LazySearchPage} />
        </Router>
      </Suspense>
    </div>
  )
}

export default App
