import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <nav className="flex flex-col gap-2">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/bookmarks">Bookmarks</Link>
        <Link to="/communities">Communities</Link>
        <Link to="/premium">Premium</Link>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/more">More</Link> */}
      </nav>
    </main>
  )
}
