import React from "react";

const Nav = ({ items }) => (
  <ul className="nav flex-column">
    {items &&
      items.map((item, index) => (
        <li key={index} className="nav-item">
          <a href={item.link} className="nav-link" title={item.title}>
            {item.title}
          </a>
        </li>
      ))}
  </ul>
);

export default Nav;
