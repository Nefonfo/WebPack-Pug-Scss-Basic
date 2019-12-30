const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    app: "./src/scripts/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    hot: true,
    port: 5501
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/index.pug",
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: "nosotros.html",
      template: "./src/pages/nosotros.pug",
      hash: true
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/styles.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.css$/,
        loader: [MiniCSSExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
module.exports = (env, argv) => {
  if (argv.mode === "development") {
  }
  if (argv.mode === "production") {
  }
  return config;
};
