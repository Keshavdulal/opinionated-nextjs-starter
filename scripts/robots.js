const fs = require('fs')

const crawlableRobotsTxt = `User-agent: *\nDisallow:`
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`

function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  const robotsTxt =
    process.env.NODE_ENVIRONMENT === 'production' ? crawlableRobotsTxt : uncrawlableRobotsTxt

  // Create robots.txt file
  fs.writeFileSync('public/robots.txt', robotsTxt)
}

module.exports = generateRobotsTxt
