import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Sponsors from "./Sponsors";

const SponsorsContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            sponsors {
              visible
              blocks {
                key
                title
                height_em
              }
            }
          }
        }
        allSponsorsYaml {
          nodes {
            name
            image
            link
            visible
            blockKey
          }
        }
      }
    `}
    render={(data) =>
      data.site.siteMetadata.sponsors.visible ? (
        <Sponsors
          blocks={data.site.siteMetadata.sponsors.blocks}
          sponsors={data.allSponsorsYaml.nodes}
        />
      ) : null
    }
  />
);

export default SponsorsContainer;
