import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  }
});
ReactDOM.render(<App client={client} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
