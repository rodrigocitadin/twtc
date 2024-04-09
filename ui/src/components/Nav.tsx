import { Link } from "react-router-dom"
import ExploreIcon from "../icons/ExploreIcon";
import HomeIcon from "../icons/HomeIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import MessagesIcon from "../icons/MessagesIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { useState } from "react";

export default function Nav() {
  const buttons = [
    { href: "/", icon: HomeIcon, isActive: true, text: "Home" },
    { href: "/explore", icon: ExploreIcon, isActive: false, text: "Explore" },
    { href: "/notifications", icon: NotificationsIcon, isActive: false, text: "Notifications" },
    { href: "/messages", icon: MessagesIcon, isActive: false, text: "Messages" },
    { href: "/profile", icon: ProfileIcon, isActive: false, text: "Profile" },
  ]

  const [pathname, setPathname] = useState(window.location.pathname)

  return (
    <nav className="min-h-screen hover:*:bg-gray-200 *:py-2 *:px-4 *:rounded-3xl px-8 pt-12 flex flex-col items-start gap-2 *:flex *:gap-2 *:items-center *:text-xl border-r-2 border-r-gray-100">
      {
        buttons.map((v, i) => {
          const LinkIcon = v.icon

          return (
            <Link 
              key={i} 
              to={v.href}
              onClick={() => setPathname(v.href)}
            >
              <LinkIcon isActive={pathname === v.href} />
              {v.text}
            </Link>
          )
        })
      }
    </nav>
  )
}
