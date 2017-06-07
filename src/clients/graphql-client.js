import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

import { GRAPHQL_URI } from '../server/config';


function createGraphqlClient({ req = {}, clientOptions = {} } = {}) {
  const networkInterface = createNetworkInterface({
    uri: GRAPHQL_URI,
    opts: {
      credentials: 'include',
      headers: req.headers || {},
    },
  });

  networkInterface.use([{
    applyMiddleware(request, next) {
      if (!request.options.headers) {
        request.options.headers = {};
      }

      next();
    },
  }]);

  return new ApolloClient({
    networkInterface,
    ...clientOptions,
  });
}

const graphqlClient = createGraphqlClient();

export default {
  graphqlClient,
  createGraphqlClient,
};
