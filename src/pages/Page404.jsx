import { Link } from '../components/Link'

export function Page404 () {
  return (
    <main className='Page404'>
      <h1>Error 404</h1>
      <img src='https://media.tenor.com/baX9xTiDRRYAAAAC/jet-bean-killer-bean.gif' alt='Image of Jet Bean in Killer Bean movie falling' />
      <small>We can't find the content you're searching</small>
      <Link to='/'>Back to home</Link>
    </main>
  )
}
