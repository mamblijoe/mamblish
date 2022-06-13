/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  webpack(config) {
    config.resolve.modules.push(path.resolve(__dirname, "src"));

    // config.module.rules.unshift({
    //   test: /svg-components\/.+\.svg$/,
    //   issuer: /\.(js|ts)x?$/,
    //   use: ['@svgr/webpack', 'file-loader'],
    // });
    return config;
  },
  distDir: "dist",
  sassOptions: {
    indentType: "tab",
    includePaths: [path.join(__dirname, "src/assets/styles")],
  },
  env: {
    APP_ENV: process.env.APP_ENV,
  },
};

module.exports = nextConfig;
