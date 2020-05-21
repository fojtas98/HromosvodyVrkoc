import React, { useState } from "react";

import Portfolio from "./Portfolio/Portfolio.js";
import Prices from "./Prices/Prices.js";
import Contacts from "./Contacts/Contacts.js";
import Home from "./Home/Home.js";
import Form from "./Form/Form.js";
import HromosvodContext from "./context.js";
import "./content.css";

const Content = (props) => {

  const [ hromosvod, setHromosvod ] = useState("");

  const changeHromosvod = (id) => {
    setHromosvod(id);
  }

  return (
    <div className="content">
      <div className="chapter">
        <div className="chapterHeader">
          <h1 id="Home">Úvod</h1>
        </div>
        <div>
          <HromosvodContext.Provider value={{hromosvod: hromosvod}}>
            <Home changeHromosvod={changeHromosvod} />
          </HromosvodContext.Provider>
        </div>
      </div>

      <div className="chapter">
        <div className="chapterHeader">
          <h1 id="work">Ukázky realizací</h1>
        </div>
        <div>
          <Portfolio status={false} />
        </div>
      </div>

      <div className="chapter">
        <div className="chapterHeader">
          <h1 id="prices">Ceník</h1>
        </div>
        <div>
          <Prices />
        </div>
      </div>

      <div className="chapter">
        <div className="chapterHeader">
          <h1 id="order">Kontaktní formulář pro kalkulaci</h1>
        </div>
        <div>
          <HromosvodContext.Provider value={{hromosvod: hromosvod}}>
            <Form />
          </HromosvodContext.Provider>
        </div>
      </div>

      <div className="chapter">
        <div className="chapterHeader">
          <h1 id="contacts">Kontakty</h1>
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Content;
