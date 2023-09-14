import path from "path";
import { Configuration } from "webpack-dev-server";

const devServerConfig: Configuration = {
  static: {
    directory: path.join(__dirname, 'src', 'public'),
  },
  open: ["/feature"],
  port: 4000,
  historyApiFallback: true,
};
export default devServerConfig;
