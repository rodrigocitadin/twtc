import { AccountBoxOutlined, ArticleOutlined, BookmarkBorderOutlined, EmailOutlined, ExploreOutlined, Home, NotificationsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex flex-col gap-2 *:flex *:gap-2 *:items-center">
      <Link to="/"><Home /> Home</Link>
      <Link to="/explore"><ExploreOutlined /> Explore</Link>
      <Link to="/notifications"><NotificationsOutlined /> Notifications</Link>
      <Link to="/messages"><EmailOutlined /> Messages</Link>
      <Link to="/lists"><ArticleOutlined /> Lists</Link>
      <Link to="/bookmarks"><BookmarkBorderOutlined />Bookmarks</Link>
      {/* <Link to="/communities">Communities</Link> */}
      {/* <Link to="/premium">Premium</Link> */}
      <Link to="/profile"><AccountBoxOutlined />Profile</Link>
      {/* <Link to="/more">More</Link> */}
    </nav>
  )
}
