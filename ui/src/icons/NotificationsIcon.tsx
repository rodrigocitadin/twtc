import { Notifications, NotificationsOutlined } from "@mui/icons-material";

export default function NotificationsIcon({ isActive }: { isActive: boolean }) {
  return isActive
    ? <Notifications />
    : <NotificationsOutlined />
}

