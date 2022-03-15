import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { default as Header } from "../components/HeaderInner";
import { default as Footer } from "../components/FooterContainer";
import { FaArrowLeft } from "react-icons/fa";
import { graphql } from "gatsby";

export default function PageTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const title = frontmatter.title;
  const configData = data.site.siteMetadata;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      <Header
        conference_name={configData.conference_name}
        conference_claim={configData.conference_claim}
        cta_pre_text={configData.header_banner.cta_pre_text}
        cta_url={configData.header_banner.cta_url}
        cta_text={configData.header_banner.cta_text}
      />

      <section>
        <div className="container">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                <FaArrowLeft /> back to the home
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="page">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1>{title}</h1>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        slug
        title
      }
    }
    site {
      siteMetadata {
        canonical_url
        conference_hashtag
        conference_name
        conference_claim
        header_banner {
          cta_pre_text
          cta_text
          cta_url
        }
      }
    }
  }
`;
