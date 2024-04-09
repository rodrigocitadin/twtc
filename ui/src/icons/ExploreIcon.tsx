import { Explore, ExploreOutlined } from "@mui/icons-material";

export default function ExploreIcon({ isActive }: { isActive: boolean }) {
  return isActive
    ? <Explore />
    : <ExploreOutlined />
}
