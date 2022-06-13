import { FC, ReactChildren, ReactElement, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "@/components/Drawer";
import LangMenu from "@/components/LangMenu";
import { useTranslation } from "react-i18next";

interface IProps {
  children: ReactChildren | Element | ReactElement;
}

const MainLayout: FC<IProps> = ({ children }) => {
  const [openLangMenu, setOpenLangMenu] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const handleLangMenu = () => {
    setOpenLangMenu((prev) => !prev);
  };

  const handleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleCloseLangMenu = () => {
    setOpenLangMenu(false);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).catch((e) => console.log(e));
    handleCloseLangMenu();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer
            open={openDrawer}
            list={["1"]}
            anchor="left"
            handleCloseDrawer={handleCloseDrawer}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("navigation.menu.home")}
          </Typography>
          <LangMenu
            handleLangMenu={handleLangMenu}
            openLangMenu={openLangMenu}
            changeLanguage={changeLanguage}
          />
        </Toolbar>
      </AppBar>
      <div
        style={{
          margin: "50px 10px",
          padding: "50px",
          borderRadius: 20,
          border: "1px solid gray",
          boxShadow: "0 0 100px #f3f3f3",
          background: "#f6f6f6",
        }}
      >
        {children}
      </div>
    </Box>
  );
};

export default MainLayout;
