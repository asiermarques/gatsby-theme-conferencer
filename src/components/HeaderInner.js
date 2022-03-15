import React from "react";

const HeaderInner = ({
  conference_name,
  conference_claim,
  cta_pre_text,
  cta_url,
  cta_text,
}) => (
  <div className="jumbotron">
    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <a href="/">
            <h2 className="display-4">{conference_name}</h2>
          </a>
          <p className="lead">{conference_claim}</p>
        </div>
        <div className="col-sm-5 text-center">
          <p>{cta_pre_text}</p>
          <a className="btn btn-primary btn-lg" href={cta_url} role="button">
            {cta_text}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderInner;
