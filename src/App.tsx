import React, {Component} from 'react';
import './App.css';
import {ApolloProvider} from "react-apollo";
import {Title} from "./components/Title/Title";
import {TitleInput} from "./components/TitleInput/TitleInput";
import DefaultClient from "apollo-boost";

export interface IAppDataProps {
    client: DefaultClient<any>
}

class App extends Component<IAppDataProps> {
    public render() {
        return (
            <ApolloProvider client={this.props.client}>
                <div className="App">
                    <div className="Column">
                        <h1>Input</h1>
                        <TitleInput/>
                    </div>
                    <div className="Column">
                        <h1>Output</h1>
                        <Title/>
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
