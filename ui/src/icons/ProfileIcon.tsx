import { AccountBox, AccountBoxOutlined } from "@mui/icons-material";

export default function ProfileIcon({ isActive }: { isActive: boolean }) {
  return isActive
    ? <AccountBox />
    : <AccountBoxOutlined />
}

