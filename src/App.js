import React, { Component } from "react";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";
import { ThemeProvider } from "./contexts/ThemeContext";

// Example from the MUI site, https://mui.com/material-ui/customization/theming/
// import { 
//   MuiThemeProvider,
//   createMuiTheme } 
//   from '@material-ui/core/styles/';

// const theme = createMuiTheme({
//   spacing: 10,
//   typography: {
//     fontSize: "1rem",
//   },
  // palette: {
  //   primary: {
  //     main: "rgb(255,0,0)",
  //   },
  // },
// });

class App extends Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
      // </MuiThemeProvider>
    );
  }
}

export default App;
