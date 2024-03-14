import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            language: "spanish", 
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