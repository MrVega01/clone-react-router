export default function SearchPage ({ routeParams }) {
  return (
    <>
      <h1>You have searched:</h1>
      <p>{routeParams.query}</p>
    </>
  )
}
