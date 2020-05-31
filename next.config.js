const path = require("path");
const withFonts = require("next-fonts");

require("dotenv").config();

module.exports = withFonts({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config, option) {
    return config;
  },
  env: {
    SENDY_API_KEY: process.env.SENDY_API_KEY,
    SENDY_URL: process.env.SENDY_URL,
    SENDY_LIST_ID: process.env.SENDY_LIST_ID,
    BACKEND_URL: process.env.BACKEND_URL,
  },
});
