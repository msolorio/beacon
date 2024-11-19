const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // config.resolve.alias['@'] = path.resolve(__dirname, 'renderer/app/home/components/BlockEditorSrc');
    return config
  },
}
