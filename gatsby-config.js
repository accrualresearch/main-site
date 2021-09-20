module.exports = {
  siteMetadata: {
    title: `Accrual Research`,
    description: `Blockchain is disrupting finance, producing a future where digital assets have no bounds. The result will be a more equitable and empowered world. Accrual Research is turning this future into reality.`,
    siteUrl: `https://accrual-research.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `accrual-research`,
        short_name: `accrual`,
        start_url: `/`,
        background_color: `#001657`,
        theme_color: `#001657`,
        display: `minimal-ui`,
        icon: `src/img/accrual.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 2000
      }
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5V5LXLW",
        includeInDevelopment: false,
        defaultDataLayer: {},
        routeChangeEventName: "virtualPageView",
      },
    },
    {
      resolve: `cookie-though`,
      options: {
        config: {
          policies: [
            {
              id: "essential",
              label: "Essential Cookies",
              description:
                "We need to save some technical cookies, for the website to function properly.",
              category: "essential",
            },
            {
              id: "functional",
              label: "Functional Cookies",
              category: "functional",
              description:
                "We need to save some basic preferences eg. language.",
            },
            {
              id: "statistics",
              label: "Statistics",
              category: "statistics",
              description:
                "We need to save some analytics cookies in order to improve the content of our website and detect problems.",
            }
          ],
          permissionLabels: {
            accept: "Accept",
            acceptAll: "Accept all",
            decline: "Decline",
          },
          cookiePreferenceKey: "cookie-preferences",
          header: {
            title: "Cookie Preferences",
            subTitle: "You're probably fed up with these banners...",
            description:
              "Everybody wants to show his best side - and so do we. That’s why we use cookies to guarantee you a better experience.",
          },
          cookiePolicy: {
            url: "/cookie-policy",
            label: "Read the full cookie declaration",
          },
        },
      },
    },
  ],
}
