import HtmlWebpackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";
import { Configuration } from "webpack";
import { dependencies } from "./package.json";
import devServerConfig from "./webpack.devServer.config";

const config: Configuration = {
  entry: "./src/index.tsx", // Adjust your entry point accordingly
  mode: "development",
  devServer: devServerConfig,
  module: {
    // Your loaders for development here
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // Other development-specific plugins
    new ModuleFederationPlugin({
      name: "Container",
      remotes: {
        Feature: `Feature@http://localhost:4000/moduleEntry.js`,
      },
      shared: {
        // ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  target: "web",
};

export default config;
