const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  useFileSystemPublicRoutes: false,
  include: path.resolve(__dirname, "src/assets/svg"),
  webpack(config, options) {
    return config;
  },
});
