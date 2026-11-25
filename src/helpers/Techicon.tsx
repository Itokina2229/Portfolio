
import { Box, Tooltip, type SxProps, type Theme } from "@mui/material";
import type { TechItem } from "../data/tech";

type TechIconProps = {
  item: TechItem;
  sx?: SxProps<Theme>;
  showTooltip?: boolean;
};

const TechIcon = ({ item, sx, showTooltip = false }: TechIconProps) => {
  const icon = (
    <Box
      component="img"
      src={item.darkIcon ?? item.icon}
      alt={item.name}
      sx={{ display: "block", flexShrink: 0, cursor: "default", ...sx }}
    />
  );

  if (!showTooltip) return icon;

  return (
    <Tooltip title={item.name} placement="top" arrow>
      {icon}
    </Tooltip>
  );
};

export default TechIcon;
