const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Matthew Waters, Full-Stack Developer', // Navigation and Site Title
  siteTitleAlt: 'Matthew Waters, Front-End Web Developer', // Alternative Site title for SEO
  siteTitleShort: 'Matthew Waters', // short_name for manifest
  siteHeadline: 'I code simple things, and I love what I do', // Headline for schema.org JSONLD
  siteUrl: 'https://matthewh20.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Hi!, I am a full-stack dev that loves to create',
  author: 'Matthew Waters', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  ogSiteName: 'Matt', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-39299313-3',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blueBlack,
}
