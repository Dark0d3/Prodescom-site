/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `PRODESCOM`,
    subtitle: `DESIGN CONTEST`
  },
  plugins : [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway', 'Montserrat', 'Merriweather']
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Providence Design Competition",
        short_name: "PRODESCOM",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "content/logos/prodesBl.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.WORDPRESS_BASE_URL,
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144503285-2",
        // head: false,
        // respectDNT: true,
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
      },
    },
  ]
}
