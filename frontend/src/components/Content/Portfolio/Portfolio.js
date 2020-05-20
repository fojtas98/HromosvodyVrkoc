import React, { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem.js";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import "./portfolio.css";

const callQuery = gql`
  {
    getAllFeed {
      description
      title
      url
      _id
    }
  }
`;

const Portfolio = (props) => {
  const { loading, error, data, refetch } = useQuery(callQuery);
  const [arr, setArr] = useState([]);

  const getArr = (itemData) => {
    setArr(() => {
      const newArr = itemData.getAllFeed.map((item, index) => {
        return (
          <PortfolioItem
            key={index}
            _id={item._id}
            title={item.title}
            url={item.url}
            description={item.description}
            admin={props.admin}
            checkStatus={props.checkStatus}
            checkIfEditing={props.checkIfEditing}
          />
        );
      });
      return newArr.reverse();
    });
  };

  const afterRefetch = () => {
    refetch().then(({ data }) => {
      getArr(data);
    });
  };
  useEffect(() => {
    if (
      props.status.post === true ||
      props.status.delete === true ||
      props.status.edit === true
    ) {
      return afterRefetch();
    }
    if (!loading && data) {
      return getArr(data);
    }
  }, [loading, props.status]);

  return <div>{arr}</div>;
};

export default Portfolio;
