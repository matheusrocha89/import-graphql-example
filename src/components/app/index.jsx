import React from 'react';
import { graphql } from 'react-apollo';

import query from '../../graphql/query.graphql';


const App = () => (
  <h1>Hello World!</h1>
);

export default graphql(query)(App);
