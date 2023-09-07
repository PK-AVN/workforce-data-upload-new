import path from "path";
import { Configuration } from "webpack-dev-server";

const devServerConfig: Configuration = {
  static: {
    directory: path.join(__dirname, "public"),
  },
  port: 4000,
};
export default devServerConfig;
