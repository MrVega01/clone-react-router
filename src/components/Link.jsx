import { EVENTS } from '../utils/constants'

export function navigate (url) {
  window.history.pushState({}, '', url)
  const navigationEvent = new Event(EVENTS.PUSH_STATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ children, target, to, ...props }) {
  const handlerClickLink = (e) => {
    const isPrimaryClick = e.button === 0
    const isPureClick = !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey
    const isTargetManageable = !target || target === '_self'

    if (isPrimaryClick && isPureClick && isTargetManageable) {
      e.preventDefault()
      navigate(to)
    }
  }
  return <a href={to} target={target} {...props} onClick={handlerClickLink}>{children}</a>
}
