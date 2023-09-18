import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import DotenvWebpackPlugin from "dotenv-webpack";

const config: Configuration = {
  entry: "./src/index.tsx", // Adjust your entry point accordingly
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Your loaders for production here
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new DotenvWebpackPlugin({
      path: "../.env.production",
    }),
    // Other production-specific plugins
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  target: "web",
};

export default config;
