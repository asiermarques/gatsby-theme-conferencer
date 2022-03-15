import React from "react";

const Sponsors = ({ visible, blocks, sponsors }) => (
  <section id="sponsors">
    <div className="container">
      <h2>Our sponsors</h2>
      {blocks &&
        blocks.map((block, index_block) => (
          <div key={index_block} className="sponsor_block">
            {block.title && <h3>{block.title}</h3>}
            {sponsors &&
              sponsors.map(
                (sponsor, index) =>
                  sponsor.visible &&
                  sponsor.blockKey === block.key && (
                    <a
                      key={index}
                      href={sponsor.link}
                      title={sponsor.name}
                      className="sponsor"
                    >
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        style={{
                          height: block.height_em + "em",
                          width: "auto",
                        }}
                      />
                    </a>
                  )
              )}
          </div>
        ))}
    </div>
  </section>
);

export default Sponsors;
