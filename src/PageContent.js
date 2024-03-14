import React, { Component } from 'react';
import { withThemeContext } from "./contexts/ThemeContext";

class PageContent extends Component {

  render() {
    const { isDarkMode } = this.props.themeContext;
    const styles = {
        backgroundColor: isDarkMode ? "black" : "white",
        height: "100vh",
        width: "100vw",
    }
    return (
      <div style={styles}>
          {this.props.children}
      </div>
    )
  }
}

export default withThemeContext(PageContent);