import React, {Component} from 'react';
import './App.css';
import {ApolloProvider} from "react-apollo";
import {Title} from "./components/Title/TitleComponent";
import {TitleInput} from "./components/TitleInput/TitleInputComponent";

export interface IAppDataProps {
  client: any
}

class App extends Component<IAppDataProps> {
  render() {
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
