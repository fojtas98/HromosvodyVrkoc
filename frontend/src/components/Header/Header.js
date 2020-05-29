/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import img from "../../img/hromosvody_header_small.png";

import "./header.css";

const Header = (props) => {
  const [burgerLinks, setBurgerLinks] = useState("none");
  // const changeAdmin = (e) => {
  //   if (e.target.id === "1") {
  //     props.setAdmin(false);
  //   } else {
  //     props.setAdmin((prevState) => !prevState);
  //   }
  // };

  const handleBurgerClick = (e) => {
    const burger = document.getElementById("burgerContainer");
    const navLinks = document.getElementById("navLinks");  
    burger.classList.toggle("change");
    // navLinks.style.display === "block" ? navLinks.style.display = "none" : navLinks.style.display = "block";
    setBurgerLinks(prevState => prevState === "none" ? navLinks.style.display = "block" : navLinks.style.display = "none");
  };

  return (
    <div className="header">
      <img src={img} alt="hromosvody" className="header-pic" />

      <div className="nav">
        <div
          className="burgerContainer"
          onClick={() => handleBurgerClick()}
          id="burgerContainer"
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <ul className="navLinks" id="navLinks" >
          <a href="/" id="1">
            Domů
          </a>
          <a href="/#work" id="1">
            Realizace
          </a>
          <a href="/#prices" id="1">
            Ceník
          </a>
          <a href="/#order" id="1">
            Poptávka
          </a>
          <a href="/#contacts" id="1">
            Kontakty
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
