import Drawer from "@mui/material/Drawer";
import { FC } from "react";
import { TAnchor } from "@/types/drawer";

interface IProps {
  open: boolean;
  anchor: TAnchor;
  handleCloseDrawer: () => void;
  list: string[];
}

const CustomDrawer: FC<IProps> = ({
  list,
  open,
  anchor,
  handleCloseDrawer,
}) => {
  return (
    <Drawer anchor={anchor} open={open} onClose={handleCloseDrawer}>
      12313212{" "}
    </Drawer>
  );
};

export default CustomDrawer;
