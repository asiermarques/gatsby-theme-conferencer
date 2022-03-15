import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import SpeakerCard from "../components/SpeakerCard";
import { default as Header } from "../components/HeaderHome";
import Agenda from "../components/AgendaContainer";
import Footer from "../components/FooterContainer";
import { graphql } from "gatsby";

export default function index({ data }) {
  const configData = data.site.siteMetadata;
  const speakers = data.allSpeakersYaml.nodes;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {configData.conference_name} {configData.conference_hashtag}
        </title>
        <link rel="canonical" href="{configData.conference_claim}" />
      </Helmet>

      <Header
        conference_name={configData.conference_name}
        conference_claim={configData.conference_claim}
        cta_pre_text={configData.header_banner.cta_pre_text}
        cta_url={configData.header_banner.cta_url}
        cta_text={configData.header_banner.cta_text}
      />

      <div id="content" class="container">
        <section id="presentation" class="text-center">
          <h2>
            {configData.home.title} <span>{configData.conference_hashtag}</span>
          </h2>
          <p>{configData.home.description}</p>
          <p>
            <a href="#agenda">{configData.home.agenda_cta_text}</a>
          </p>
        </section>

        <section id="speakers" class="row">
          {speakers.map((speaker, i) => {
            return (
              <div class="col-lg-4 col-sm-6 col-xs-12">
                <SpeakerCard speaker={speaker} />
              </div>
            );
          })}
        </section>
        {configData.agenda.visible && <Agenda />}
      </div>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allSpeakersYaml {
      nodes {
        name
        slug
        company
        image
      }
    }
    site(siteMetadata: {}) {
      siteMetadata {
        canonical_url
        conference_claim
        conference_hashtag
        conference_name
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
        agenda {
          visible
        }
      }
    }
  }
`;
