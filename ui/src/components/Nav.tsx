import { Link } from "react-router-dom"
import ExploreIcon from "../icons/ExploreIcon";
import HomeIcon from "../icons/HomeIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import MessagesIcon from "../icons/MessagesIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { useState } from "react";

export default function Nav() {
  const [activeButton, setActiveButton] = useState({
    home: true,
    explore: false,
    notifications: false,
    messages: false,
    profile: false
  })

  const defaultState = {
    home: false,
    explore: false,
    notifications: false,
    messages: false,
    profile: false
  }

  return (
    <nav className="min-h-screen hover:*:bg-gray-200 *:py-2 *:px-4 *:rounded-3xl px-8 pt-12 flex flex-col items-start gap-2 *:flex *:gap-2 *:items-center *:text-xl border-r-2 border-r-gray-100">
      <Link onClick={() => setActiveButton({ ...defaultState, home: true })} to="/">
        <HomeIcon isActive={activeButton.home} />
        Home
      </Link>
      <Link onClick={() => setActiveButton({ ...defaultState, explore: true })} to="/explore">
        <ExploreIcon isActive={activeButton.explore} />
        Explore
      </Link>
      <Link onClick={() => setActiveButton({ ...defaultState, notifications: true })} to="/notifications">
        <NotificationsIcon isActive={activeButton.notifications} />
        Notifications
      </Link>
      <Link onClick={() => setActiveButton({ ...defaultState, messages: true })} to="/messages">
        <MessagesIcon isActive={activeButton.messages} />
        Messages
      </Link>
      <Link onClick={() => setActiveButton({ ...defaultState, profile: true })} to="/profile">
        <ProfileIcon isActive={activeButton.profile} />
        Profile
      </Link>
    </nav>
  )
}
