import { Home, HomeOutlined } from "@mui/icons-material";

export default function HomeIcon({ isActive }: { isActive: boolean }) {
  return isActive
    ? <Home />
    : <HomeOutlined />
}
