const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@settings': path.resolve(__dirname, 'src/settings'),
      '@ui-kit': path.resolve(__dirname, 'src/ui-kit')
    },
  },
};