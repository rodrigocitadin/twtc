import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Explore from "./pages/Explore"
import Notifications from "./pages/Notifications"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import App from "./App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/notifications",
        element: <Notifications />
      },
      {
        path: "/messages",
        element: <Messages />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
