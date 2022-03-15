import React from "react";

const LocationMap = ({ location }) => (
  <section id="where">
    <h2 className="text-center">Location</h2>
    <div className="content_wrap">
      <div className="content">
        <div className="container">
          <div className="col-md-5 col-xs-12">
            <div className="card">
              <div className="card-body">
                {location.addresses &&
                  location.addresses.map((address, index) => (
                    <div key={index} className="address">
                      <h5>{address.name}</h5>
                      <p>
                        <span
                          dangerouslySetInnerHTML={{ __html: address.line }}
                        />
                        <br />
                        <small>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={address.map_link}
                          >
                            open map
                          </a>
                        </small>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src={location.gmaps_iframe_url}
        width="100%"
        height="550"
        title="map"
        frameBorder="0"
        allowFullScreen="false"
      />
    </div>
  </section>
);

export default LocationMap;
