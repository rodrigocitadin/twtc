import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
