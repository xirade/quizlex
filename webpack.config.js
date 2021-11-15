const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = ({ development }) => ({
  mode: development ? "development" : "production",
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: !development ? "[name].js" : "[name].[contenthash].js",
  },
  devServer: {
    watchFiles: ["src/**/*"],
    open: true,
    compress: true,
    port: 5500,
    hot: development,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@sass": path.resolve(__dirname, "src/assets/sass"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      minify: {
        collapseWhitespace: !development,
      },
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
