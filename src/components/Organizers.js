import React from "react";

const Organizers = ({ organizers }) => (
  <>
    <h3>Organizers</h3>
    <div className="row justify-content-start">
      {organizers.length &&
        organizers.map((organizer, index) => (
          <div key={index} className="col-6 col-md-3">
            <a
              href={organizer.link}
              title={organizer.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={organizer.image}
                alt={organizer.name}
                className="img-thumbnail"
              />
            </a>
          </div>
        ))}
    </div>
  </>
);

export default Organizers;
