import React from "react";
import DeleteButton from '../../../AdminZone/DeleteButton.js';

const PortfolioItem = (props) => {
  const test = props.index % 2;
  return (
    <div className="portfolioItem" id={"id" + test}>
      <h2>{props.title}</h2>

      <p>{props.description}</p>
      <img src={props.url} alt="img" />
      {props.admin ? (
        <DeleteButton title={props.title} checkStatus={props.checkStatus} />
      ) : null}
    </div>
  );
};

export default PortfolioItem;
