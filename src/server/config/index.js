export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_HOST: process.env.APP_HOST || '0.0.0.0',
  APP_PORT: process.env.APP_PORT || 4000,
  GRAPHQL_URI: process.env.GRAPHQL_URI || 'http://localhost:3000/graphql',
};
