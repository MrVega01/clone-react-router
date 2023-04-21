import { useEffect, useState, Children } from 'react'
import { EVENTS } from '../utils/constants'
import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  let routeParams

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

  const childrensRoutes = Children.map(children, ({ props, type }) => {
    const isRoute = type.name === 'Route'
    return isRoute ? props : null
  }).filter(children => children !== null)

  const allRoutes = routes.concat(childrensRoutes)

  const Path = allRoutes.find(({ path }) => {
    if (path === currentPath) return true
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false
    routeParams = matched.params
    return true
  })?.component

  return Path ? <Path routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
