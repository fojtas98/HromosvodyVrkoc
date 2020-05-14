import React from "react";

import Portfolio from "./Portfolio/Portfolio.js";
import Prices from "./Prices/Prices.js";
import Contacts from "./Contacts/Contacts.js";
import Home from "./Home/Home.js";
import Form from './Form/Form.js';

import './content.css';

const Content = (props) => {
  return (
    <div className="content">

      <div className="chapter">
        <div className="chapterHeader">
          <h1 id="Home">Úvod</h1>
        </div>
        <div>
          <Home />
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
          <Form />
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
