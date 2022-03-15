import React from "react";
import LocationMap from "./LocationMap";
import Sponsors from "./SponsorsContainer";
import Organizers from "./Organizers";
import Nav from "./Nav";

const Footer = ({ location, organizers, links }) => (
  <footer>
    <LocationMap location={location} />
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Organizers organizers={organizers} />
          </div>
          <div className="col-md-5 text-center">
            <h4>About</h4>
            <Nav items={links} />
          </div>
        </div>
      </div>
    </section>
    <Sponsors />
    <section>
      <div className="container">
        <hr />
        Created with the{" "}
        <a href="https://github.com/asiermarques/gatsby-starter-conferencer">
          Gatsby Theme Conferencer
        </a>
      </div>
    </section>
  </footer>
);

export default Footer;
