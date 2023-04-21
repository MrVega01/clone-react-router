import { Link } from '../components/Link'

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Home page for example to create a mini React Router</p>
      <Link to='/about'>About</Link>
    </>
  )
}
