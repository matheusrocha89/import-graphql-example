import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';

import Html from './render-index';
import App from '../../components/app';
import { createGraphqlClient } from '../../clients/graphql-client';


const assetsMap = {
  main: '/bundle.js',
};

function appRender(req, res) {
  const clientOptions = {
    ssrMode: true,
  };
  const graphqlClient = createGraphqlClient({ req, clientOptions });
  const app = (
    <ApolloProvider client={graphqlClient}>
      <App />
    </ApolloProvider>
  );

  renderToStringWithData(app).then((content) => {
    const data = graphqlClient.store.getState().apollo.data;
    const html = (
      <Html
        content={content}
        state={{ apollo: { data } }}
        assetsMap={assetsMap}
      />
    );

    res.status(200);
    res.send(`<!DOCTYPE html>\n${renderToStaticMarkup(html)}`);
    res.end();
  }).catch((e) => {
    console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
    res.status(500);
    res.end(`An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${e.stack}`);
  });
}

export default appRender;
