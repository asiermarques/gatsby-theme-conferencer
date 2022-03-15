import React from "react";
import AgendaMapper from "../lib/agendaMapper";
import { graphql, StaticQuery } from "gatsby";
import Agenda from "./Agenda";

const AgendaContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            agenda {
              time_slots
              tracks
              visible
            }
          }
        }
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
        allAgendaContentYaml {
          nodes {
            type
            content
            track
            slot
          }
        }
      }
    `}
    render={(data) => (
      <Agenda
        time_slots={data.site.siteMetadata.agenda.time_slots}
        tracks={data.site.siteMetadata.agenda.tracks}
        agendaSlotMap={AgendaMapper(
          data.site.siteMetadata.agenda.time_slots,
          data.site.siteMetadata.agenda.tracks,
          data.allAgendaContentYaml.nodes,
          data.allSpeakersYaml.nodes
        )}
        visible={data.site.siteMetadata.agenda.visible}
      />
    )}
  />
);

export default AgendaContainer;
