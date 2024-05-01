const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'game/models', // Dossier source des modèles 3D
          to: 'models' // Dossier de destination dans le dossier de sortie final
        }
      ]
    })
  ]
});