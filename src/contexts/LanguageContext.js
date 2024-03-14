import React, { Component, createContext, Consumer } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            language: "english", 
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage (event) {
        if (event.target.value)
        this.setState({ 
            language: event.target.value
         });
    }

    render () {
    return (
        <LanguageContext.Provider value={
            {...this.state,
            changeLanguage: this.changeLanguage}
        }>
            {this.props.children}
        </LanguageContext.Provider>
        );
    }
}

// Make a higher-order component function (HOC/HOF) that wraps this context and allows it to be used in parallel with other contexts in a given child component
export const withLanguageContext = MyComponent => props => (
    <LanguageContext.Consumer>
        {val => <MyComponent languageContext={val} {...props} />}
    </LanguageContext.Consumer>
);