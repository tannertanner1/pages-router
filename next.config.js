const webpack = require('webpack');

module.exports = {
  i18n: {
    // specifies lang attribute
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // enables client-side WebSockets
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return config;
  },
}