import { Email, EmailOutlined } from "@mui/icons-material";

export default function MessagesIcon({ isActive }: { isActive: boolean }) {
  return isActive
    ? <Email />
    : <EmailOutlined />
}

