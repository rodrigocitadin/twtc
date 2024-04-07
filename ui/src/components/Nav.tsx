import { AccountBoxOutlined, ArticleOutlined, BookmarkBorderOutlined, EmailOutlined, ExploreOutlined, Home, NotificationsOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="min-h-screen hover:*:bg-gray-200 *:py-2 *:px-4 *:rounded-3xl px-8 pt-12 flex flex-col items-start gap-2 *:flex *:gap-2 *:items-center *:text-xl border-r-2 border-r-gray-100">
      <Link to="/"><Home /> Home</Link>
      <Link to="/explore"><ExploreOutlined /> Explore</Link>
      <Link to="/notifications"><NotificationsOutlined /> Notifications</Link>
      <Link to="/messages"><EmailOutlined /> Messages</Link>
      <Link to="/lists"><ArticleOutlined /> Lists</Link>
      <Link to="/bookmarks"><BookmarkBorderOutlined />Bookmarks</Link>
      <Link to="/profile"><AccountBoxOutlined />Profile</Link>
    </nav>
  )
}
