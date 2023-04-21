export function Search ({ routeParams }) {
  return (
    <>
      <h1>You have searched:</h1>
      <p>{routeParams.query}</p>
    </>
  )
}
