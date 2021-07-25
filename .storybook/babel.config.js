module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      { runtime: 'automatic', importSource: '@emotion/react' },
      // { runtime: 'classic' },
    ],
  ],
  // plugins: ['@emotion/babel-plugin'],
  plugins: [
    [
      '@emotion',
      {
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
    [
      '@babel/plugin-transform-typescript',
      {
        isTSX: true, // Forcibly enables jsx parsing. Otherwise angle brackets will be treated as TypeScript's legacy type assertion
      },
    ],
  ],
};
