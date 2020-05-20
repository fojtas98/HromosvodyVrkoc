import React from "react";
import DeleteButton from "../AdminZone/DeleteButton";

import editImg from "../../../img/edit-tools.png";
import EditButton from "../AdminZone/EditButton";

const PortfolioItem = (props) => {
  const test = props.index % 2;
  return (
    <div>
      {props.admin ? (
        <div className="adminPortfolio">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <img src={props.url} alt="img" />
          <div>
            <DeleteButton title={props.title} checkStatus={props.checkStatus} />
            <EditButton
              index={props.index}
              checkIfEditing={props.checkIfEditing}
              title={props.title}
              url={props.url}
              description={props.description}
            />
          </div>
        </div>
      ) : (
        <div className="portfolioItem" id={"id" + test}>
          <h2>{props.title}</h2>

          <p>{props.description}</p>
          <img src={props.url} alt="img" />
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
