// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const generateRobotsTxt = require('./scripts/robots')

const nextConfiguration = {
  // images: {
  //   domains: [process.env.DOMAIN],
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // robots.txt
    generateRobotsTxt()

    return config
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development', // disable during development
    dest: 'public',
    runtimeCaching,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Browse sourcemaps in dev environment by yarn analyze
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
}

module.exports = withPWA(nextConfiguration)
