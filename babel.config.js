module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@screens': './src/containers',
            '@assets': './assets',
            '@share': './src/share',
            '@redux': './src/redux',
            '@constants': './src/constants',
            '@components': './src/components'
          }
        }
      ]
    ]
  };
};
