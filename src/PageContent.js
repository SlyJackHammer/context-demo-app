import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const {isDarkMode} = this.context;

    const styles = {
        backgroundColor: isDarkMode ? "black" : "white",
        height: "100vh",
        width: "100vw",
    }
    return (
        <ThemeContext.Consumer>
{/** MyContext.Consumer: Another way of using context values, without having to grab explicitly from `this.context`. "function as a child" pattern
 * https://legacy.reactjs.org/docs/context.html#contextconsumer
*/}
            {   isDarkMode =>   
            <div style={styles}>
                {this.props.children}
                <button style={isDarkMode ? 
                    { backgroundColor: "black", color: "white" } :
                    { backgroundColor : "white", color: "black" }}>DarkMode?</button>
            </div>
            }
        </ThemeContext.Consumer>
    )
  }
}

export default PageContent