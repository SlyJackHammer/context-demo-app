import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { withLanguageContext } from "./contexts/LanguageContext";
import { FormLangContent } from "./contexts/languageAppContent";

class Form extends Component {

  render() {
    const { classes, languageContext } = this.props;
    const { language, changeLanguage } = languageContext;
    const { email, password, signInBtn, signInHeader, rememberMeChk } = FormLangContent[language];

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{signInHeader}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='french'>French</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{email}</InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{password}</InputLabel>
              <Input id='password' name='password' autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label={rememberMeChk}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              {signInBtn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Form));
