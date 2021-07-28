const custom = require('../webpack.config.js');
const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
     "storybook-addon-pseudo-states",
  ],
  "core": {
    "builder": "webpack5"
  },
  features: {
    postcss: false,
    previewCsfV3: true,
  },
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...custom.resolve.alias,
        // добавлены алиасы для работы CSS взято отсюда:
        // https://github.com/storybookjs/storybook/issues/13277
        // пример от openscript
        // https://github.com/openscript/react-section-dividers/tree/feat/emotion11
        "@emotion/core": toPath("node_modules/@emotion/react"),
        "@emotion/styled": toPath("node_modules/@emotion/styled"),
        "emotion-theming": toPath("node_modules/@emotion/react"),
      },
    },
  }),
}