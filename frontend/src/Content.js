import React from "react";
import AdminZone from "./AdminZone/AdminZone";
import Portfolio from "./Portfolio/Portfolio";
import Prices from "./Prices";
import Order from "./Order";
import Contacts from "./Contacts";

const Content = (props) => {
  return (
    <div className="content">
      {props.admin ? (
        <AdminZone />
      ) : (
        <div>
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
            <Prices />
          </div>

          <div className="chapter">
            <div className="chapterHeader">
              <h1 id="order">Kontaktní formulář pro kalkulaci</h1>
            </div>
            <Order />
          </div>

          <div className="chapter">
            <div className="chapterHeader">
              <h1 id="contacts">Kontakty</h1>
            </div>
            <Contacts />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
