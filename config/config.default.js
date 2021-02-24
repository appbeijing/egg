
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_abc';
  config.url ='https://py.lexue.com'
  // add your config here
  config.middleware = [];
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  return config;
}