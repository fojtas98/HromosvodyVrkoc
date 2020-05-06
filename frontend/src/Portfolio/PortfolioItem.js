import React from "react";
import DeleteButton from "../AdminZone/DeleteButton";

const PortfolioItem = (props) => {
  return (
    <div className="PortfolioItem">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={props.url} alt="img" />
      <DeleteButton title={props.title} />
    </div>
  );
};

export default PortfolioItem;