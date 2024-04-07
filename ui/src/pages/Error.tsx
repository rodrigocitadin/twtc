import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function Error() {
  const error = useRouteError()
  let errorMessage
  let errorStatus

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText
    errorStatus = error.status
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{`${errorMessage} - ${errorStatus}`}</i>
      </p>
    </div>
  )
}
