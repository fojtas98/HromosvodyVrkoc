/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from "./img/hromosvody_header_small.png";

const Header = (props) => {
  const changeAdmin = (e) => {
    if (e.target.id === "1") {
      props.setAdmin(false);
    } else {
      props.setAdmin((prevState) => !prevState);
    }
  };

  return (
    <div className="header">
      <img src={img} alt="hromosvody" className="header-pic" />

      <div className="navlinks">
        <ul>
          <a href="#" id="1" onClick={changeAdmin}>
            Domů
          </a>
          <a href="#work" id="1" onClick={changeAdmin}>
            Realizace
          </a>
          <a href="#prices" id="1" onClick={changeAdmin}>
            Ceník
          </a>
          <a href="#order" id="1" onClick={changeAdmin}>
            Poptávka
          </a>
          <a href="#contacts" id="1" onClick={changeAdmin}>
            Kontakty
          </a>
          <a href="#" id="2" onClick={changeAdmin}>
            Admin Zone
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
