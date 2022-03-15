import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { default as Header } from "../components/HeaderInner";
import { default as Footer } from "../components/FooterContainer";
import { FaArrowLeft, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SpeakerTemplate = (context) => {
  const speaker = context.pageContext.speaker;
  const configData = context.pageContext.configData;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{speaker.name}</title>
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
              <a class="nav-link active" href="/#agenda">
                <FaArrowLeft /> back to the agenda
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="speaker-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="col-md-8">
              <h1>{speaker.name}</h1>
              <h5>{speaker.company}</h5>
              <p>
                {speaker.social?.twitter ? (
                  <a href={speaker.social.twitter}>
                    <FaTwitter />
                  </a>
                ) : (
                  ""
                )}
                &nbsp;
                {speaker.social?.github ? (
                  <a href={speaker.social.github}>
                    <FaGithub />
                  </a>
                ) : (
                  ""
                )}
                &nbsp;
                {speaker.social?.linkedin ? (
                  <a href={speaker.social.linkedin}>
                    <FaLinkedin />
                  </a>
                ) : (
                  ""
                )}
              </p>
              <h4>About</h4>
              <p>{speaker.bio}</p>

              <hr></hr>

              <h4>{speaker.talk.title}</h4>
              <p>{speaker.talk.description}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};
export default SpeakerTemplate;
