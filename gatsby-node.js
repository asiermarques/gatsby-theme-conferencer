const fs = require("fs");
const path = require("path");
const sharp = require(`sharp`);
const glob = require(`glob`);

const optimizeImages = async () => {
  const matches = glob.sync(`public/**/*.{png,jpg,jpeg}`);
  const MAX_WIDTH = 1800;
  const QUALITY = 70;
  const PREFIX = `-optimized`;
  await Promise.all(
    matches.map(async (match) => {
      try {
        const stream = await sharp(match);
        const info = await stream.metadata();

        if (info.width <= MAX_WIDTH || match.search(`${PREFIX}.`) !== -1)
          return;

        const optimizedName = match.replace(
          /(\..+)$/,
          (name, ext) => `${PREFIX}${ext}`
        );
        await stream
          .resize(MAX_WIDTH)
          .jpeg({ quality: QUALITY })
          .toFile(optimizedName);
        return fs.rename(optimizedName, match, (err) => {
          if (err) console.log(`${match} with err: ${err}`);
          console.log(`${match} image optimized`);
        });
      } catch (e) {
        console.log(`${match} was not optimized because the error: ${e}`);
      }
    })
  );
};

const createContentPages = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  const pageTemplate = require.resolve(`./src/templates/page-template.js`);
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: edge.node.frontmatter.slug,
      component: pageTemplate,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    });
  });
};

const createSpeakerPages = async (graphql, createPage, metadata) => {
  const result = await graphql(`
    {
      allSpeakersYaml {
        nodes {
          slug
          image
          name
          bio
          company
          social {
            twitter
            github
            linkedin
          }
          talk {
            title
            description
          }
        }
      }
    }
  `);
  const speakerTemplate = require.resolve(
    `./src/templates/speaker-template.js`
  );
  result.data.allSpeakersYaml.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: speakerTemplate,
      context: {
        speaker: node,
        configData: metadata,
      },
    });
  });
};

exports.onPostBuild = optimizeImages;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      site {
        siteMetadata {
          canonical_url
          conference_hashtag
          conference_name
          conference_claim
          home {
            title
            description
            agenda_cta_text
          }
          header_banner {
            cta_pre_text
            cta_text
            cta_url
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query for generating speaker pages.`
    );
    return;
  }
  await createSpeakerPages(graphql, createPage, result.data.site.siteMetadata);
  await createContentPages(graphql, createPage);
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    schema.buildObjectType({
      name: "SocialNode",
      fields: {
        twitter: "String",
        linkedin: "String",
        github: "String",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "TalkNode",
      fields: {
        title: "String!",
        description: "String!",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "SpeakersYaml",
      fields: {
        slug: "String!",
        image: "String!",
        name: "String!",
        bio: "String",
        company: "String",
        social: "SocialNode",
        talk: "TalkNode",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "MarkdownRemarkFrontmatter",
      fields: {
        slug: "String!",
        title: "String!",
      },
      interfaces: ["Node"],
    }),
  ];
  createTypes(typeDefs);
};
