module.exports = {
  siteMetadata: {
    title: `Nathan Parker`,
    description: `Personal website and resume of Nathan Parker`,
    author: `Nathan Parker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `np`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EEEEEE`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
