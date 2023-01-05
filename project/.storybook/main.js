const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(mdx|tsx)'],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      lazyCompilation: true,
    },
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: async (config) => {
    const cwd = process.cwd();

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.join(cwd, 'src'),
    };

    config.resolve.fallback.fs = false;

    if (process.env.NEXT_BUILD_EXPORT_STORYBOOK) {
      config.output.publicPath = '/_storybook/';
    }

    return config;
  },
  managerWebpack: async (config) => {
    if (process.env.NEXT_BUILD_EXPORT_STORYBOOK) {
      config.output.publicPath = '/_storybook/';
    }
    return config;
  },
};
