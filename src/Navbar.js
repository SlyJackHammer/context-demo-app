import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
import { NavbarLangContent } from "./contexts/languageAppContent";

function Navbar (props) {

  const { classes } = props;
  const { isDarkMode, toggleDarkMode} = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { flagEmoji, appHeader, darkModeLabel, searchBoxPlaceHolder} = NavbarLangContent[language];

  return (
    <div className={classes.root}>
      <AppBar position='static' color={ isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span role="img" aria-label="French flag">{flagEmoji}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            {appHeader}
          </Typography>
          <Switch 
            onChange={toggleDarkMode} 
            checked={isDarkMode} 
            title={darkModeLabel} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${searchBoxPlaceHolder}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(Navbar);
