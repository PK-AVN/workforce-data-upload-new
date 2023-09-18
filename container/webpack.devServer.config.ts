import { Configuration } from "webpack-dev-server";

const devServerConfig: Configuration = {
  port: 3000,
  open: true,
  historyApiFallback: true,
};
export default devServerConfig;
