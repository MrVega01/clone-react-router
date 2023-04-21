import { useEffect, useState } from 'react'
import { EVENTS } from '../utils/constants'
import { match } from 'path-to-regexp'

export function Router ({ routes, defaultComponent: DefaultComponent = null }) {
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

  const Path = routes.find(({ path }) => {
    if (path === currentPath) return true
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false
    routeParams = matched.params
    return true
  })?.component

  return Path ? <Path routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
