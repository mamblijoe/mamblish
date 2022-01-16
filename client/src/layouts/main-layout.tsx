import { FC, ReactChildren, ReactElement, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import CustomDrawer from "@/components/Drawer";
import cn from "./style.module.sass";

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
            Home
          </Typography>
          <div className={cn.langContainer}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              {i18n.language}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleLangMenu}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openLangMenu}
              onClose={handleLangMenu}
            >
              <MenuItem onClick={() => changeLanguage("ru")}>
                <span
                  style={{
                    fontWeight: i18n.language === "ru" ? "bold" : "initial",
                  }}
                >
                  ru
                </span>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("en")}>
                <span
                  style={{
                    fontWeight: i18n.language === "en" ? "bold" : "initial",
                  }}
                >
                  en
                </span>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainLayout;
