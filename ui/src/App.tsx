import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"

export default function App() {
  return (
    <main className="flex">
      <Nav />
      <Outlet />
    </main>
  )
}
