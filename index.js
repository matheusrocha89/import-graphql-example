require('babel-core/register')({
  ignore: /node_modules|\.(gql|graphql)$/,
});

require('./src/server')((app) => {
  const host = app.get('host');
  const port = app.get('port');
  const env = app.get('env');
  console.log(`Example APP is running on: ${host}:${port} in ${env} mode`);
});
