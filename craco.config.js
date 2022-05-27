const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': 'hsl(180, 29%, 50%)',
              '@text-color': 'hsl(180, 14%, 20%)',
              '@link-color': 'hsl(180, 29%, 50%)',
              '@font-family': '"League Spartan"',
              '@font-weight': '500',
              '@font-size-base': '15px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};