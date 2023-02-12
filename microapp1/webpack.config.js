import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pkg from 'webpack';
const { container } = pkg;
const __dirname = path.resolve();

const config = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', 'ts', '.js', '.jsx'],
  },
  devServer: {
    port: 3001,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'assets/bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new container.ModuleFederationPlugin({
      name: 'microapp1',
      filename: 'microapp1.js', // name to be exposed
      exposes: {
        './App': './src/App', // expose the application to outer world
      },
      remotes: {
        mainApp: 'mainApp',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
    // new BundleAnalyzerPlugin(),
  ],
};

export default config;
