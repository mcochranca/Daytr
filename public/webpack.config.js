// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx',     // Main app entry point
    admin: './src/admin.tsx',    // Admin entry point
  },
  output: {
    filename: '[name].bundle.js',  // Output separate bundles for main and admin
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // For main app
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    // For admin page
    new HtmlWebpackPlugin({
      template: './public/admin.html',
      filename: 'admin.html',
      chunks: ['admin'],
    }),
  ],
};
module.exports = {
    // Other config...
    resolve: {
      extensions: ['.tsx', '.ts', '.js'], // Ensure it includes '.tsx'
    },
  };