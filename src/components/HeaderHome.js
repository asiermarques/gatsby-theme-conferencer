import React from "react";

const HeaderHome = ({
  conference_name,
  conference_claim,
  cta_pre_text,
  cta_url,
  cta_text,
}) => (
  <div className="jumbotron">
    <div className="container text-center">
      <h1 className="display-4">{conference_name}</h1>
      <p className="lead">{conference_claim}</p>
      <hr className="my-4" />
      <p>{cta_pre_text}</p>
      <a className="btn btn-primary btn-lg" href={cta_url} role="button">
        {cta_text}
      </a>
    </div>
  </div>
);

export default HeaderHome;
