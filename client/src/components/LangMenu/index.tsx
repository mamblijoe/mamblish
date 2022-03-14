import { FC } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cn from "./style.module.sass";
import { useTranslation } from "react-i18next";

interface IProps {
  handleLangMenu: () => void;
  openLangMenu: boolean;
  changeLanguage: (lang: string) => void;
}

const LangMenu: FC<IProps> = ({
  handleLangMenu,
  openLangMenu,
  changeLanguage,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn.langContainer}>
      <Typography
        variant="h6"
        component="div"
        sx={{ mr: 2 }}
        style={{ textTransform: "uppercase" }}
      >
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
            RU
          </span>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>
          <span
            style={{
              fontWeight: i18n.language === "en" ? "bold" : "initial",
            }}
          >
            EN
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LangMenu;
