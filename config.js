module.exports = module.exports = {
  siteUrl: "http://awesomeconference.change",
  canonical_url: "http://awesomeconference.change",
  conference_name: "Our awesome conference",
  conference_claim:
    "A great conference for developers and other mystical creatures",
  conference_hashtag: "#hashtag",
  location: {
    gmaps_iframe_url:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.255497835498!2d-2.947592084396059!3d43.26702288533392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE2JzAxLjMiTiAywrA1Nic0My41Ilc!5e0!3m2!1ses!2ses!4v1543099024128",
    addresses: [
      {
        name: "Main Venue",
        line: "Example Street 140<br>Gotham 48480",
        map_link:
          "https://www.google.com/maps?ll=43.266707,-2.945395&z=17&t=m&hl=es&gl=ES&mapclient=embed",
      },
    ],
  },
  header_banner: {
    cta_pre_text: "100 early-bird tickets left",
    cta_text: "Tickets on sale!",
    cta_url: "https://awesome_url_for_your_ticketing_platform.com",
  },
  home: {
    title: "Your awesome",
    description:
      "A little description for the conference, what is the audience, why is interesting to the people and this kind of stuff",
    agenda_cta_text: "view the agenda",
  },
  speakers: {
    visible: true,
  },
  agenda: {
    visible: true,
    time_slots: ["10:00-11:00", "11:00-12:00"],
    tracks: ["Olympia Room", "Niza Room"],
  },
  organizers: {
    visible: true,
  },
  sponsors: {
    visible: true,
    blocks: [
      {
        key: "uranium",
        title: "Uranium",
        height_em: "15",
      },
      {
        key: "platinium",
        title: "Platinium",
        height_em: "10",
      },
    ],
  },
  footer_links: [
    {
      link: "/code-of-conduct",
      title: "Code of conduct",
    },
    {
      link: "/#agenda",
      title: "Agenda",
    },
  ],
};
