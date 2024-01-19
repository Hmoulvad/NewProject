const customMediaImports = 'src/styles/media.css';

module.exports = {
  plugins: {
    "postcss-flexbugs-fixes": {},
    '@csstools/postcss-global-data': {
      files: [customMediaImports],
    },
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        'custom-media-queries': true,
        "custom-properties": false,
        "nesting-rules": true,
      },
    },
  },
};