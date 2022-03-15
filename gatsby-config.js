const defaultConfig = require("./config.js");

module.exports = (themeOptions) => {
  const config = Object.assign(defaultConfig, themeOptions);

  return {
    siteMetadata: config,
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: "content",
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: `static/media`,
          name: "media",
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "assets",
          path: `static`,
        },
      },
      {
        resolve: "gatsby-transformer-remark",
        options: {
          commonmark: true,
          footnotes: true,
          pedantic: true,
          gfm: true,
          plugins: [],
        },
      },
      {
        resolve: "gatsby-transformer-yaml",
        options: {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `content`,
          },
        },
      },
      "gatsby-plugin-react-helmet",
      {
        resolve: "gatsby-plugin-sass",
        options: {
          cssLoaderOptions: {
            camelCase: false,
          },
        },
      },
      {
        resolve: "gatsby-plugin-sitemap",
        options: {
          query: `
                      {
                        site {
                          siteMetadata {
                            siteUrl
                          }
                        }
                        allSitePage(
                          filter: {
                            path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                          }
                        ) {
                          nodes { 
                            path 
                          }
                        }
                      }
                    `,
          output: "/sitemap.xml",
          serialize: ({ path, modifiedGmt }) => {
            return {
              url: path,
              lastmod: modifiedGmt,
            };
          },
        },
      },
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {},
          failOnError: false,
          base64Width: 20,
          forceBase64Format: `jpg`,
          useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
          stripMetadata: true,
          defaultQuality: 70,
        },
      },
    ],
  };
};
