const { resolve } = require("path");

const partialDomRenderer = resolve(__dirname, ".partial-dom-renderer/index.js");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["react-dom"] = partialDomRenderer;
    }
    return config;
  },
};
