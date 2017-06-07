import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from '../components/app';
import { createGraphqlClient } from '../clients/graphql-client';


const clientOptions = {
  initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
  connectToDevTools: true,
};
const graphqlClient = createGraphqlClient({ clientOptions });

const appWrapper = (
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>
);

window.onload = () => {
  render(appWrapper, document.getElementById('root'));
};
