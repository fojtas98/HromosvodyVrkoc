import React, { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const callQuery = gql`
  {
    getAllFeed {
      description
      title
      url
    }
  }
`;

const Portfolio = (props) => {
  const { loading, error, data } = useQuery(callQuery);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setArr(
        data.getAllFeed.map((item, index) => {
          if (props.admin) {
            return (
              <PortfolioItem
                key={index}
                description={item.description}
                title={item.title}
                url={item.url}
              />
            );
          } else {
            return (
              <PortfolioItem
                key={index}
                title={item.title}
                url={item.url}
                description={item.description}
              />
            );
          }
        })
      );
    }
  }, [loading]);

  return <div>{arr}</div>;
};

export default Portfolio;
