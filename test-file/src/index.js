import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri : 'https://api.github.com/users',
  cache : new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client} >
  <App />
  </ApolloProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

