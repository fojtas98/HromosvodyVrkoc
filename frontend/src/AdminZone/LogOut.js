import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const callQuery = gql`
  {
    logout
  }
`;

const LogOut = (props) => {
  const [logoutQ, { data, loading, error }] = useLazyQuery(callQuery);
  const logOut = () => {
    logoutQ();
  };

  useEffect(() => {
    props.cookieTest();
  }, [data, loading, error]);
  return (
    <div>
      <button onClick={logOut}>logOut</button>
    </div>
  );
};

export default LogOut;
