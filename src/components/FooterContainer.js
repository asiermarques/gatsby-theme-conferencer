import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Footer from "./Footer";

const FooterContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            conference_hashtag
            footer_links {
              link
              title
            }
            location {
              gmaps_iframe_url
              addresses {
                name
                line
                map_link
              }
            }
          }
        }
        allOrganizersYaml {
          nodes {
            name
            image
            link
          }
        }
      }
    `}
    render={(data) => (
      <Footer
        location={data.site.siteMetadata.location}
        organizers={data.allOrganizersYaml.nodes}
        links={data.site.siteMetadata.footer_links}
      />
    )}
  />
);

export default FooterContainer;
