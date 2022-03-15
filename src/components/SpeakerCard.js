import React from "react";

const SpeakerCard = ({ speaker }) => (
  <a className="card speaker" href={speaker.slug}>
    <div
      className="image"
      style={{ backgroundImage: `url('${speaker.image}')` }}
    />
    <div className="card-body">
      <h5 className="card-title">{speaker.name}</h5>
      <p className="card-text">{speaker.company}</p>
    </div>
  </a>
);

export default SpeakerCard;
