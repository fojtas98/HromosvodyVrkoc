import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

import LoginInput from "./LoginInput";
import PostInput from "./PostInput";

const login = gql`
  query login($adminInput: adminInputData) {
    login(adminInput: $adminInput) {
      email
    }
  }
`;
const AdminZone = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [postLogin, { data, loading, error }] = useLazyQuery(login);
  const [logedInEmail, setLogedInEamil] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    postLogin({ variables: { adminInput: { ...input } } }, data);
  };
  useEffect(() => {
    if (!loading && !error && data) {
      setLogedInEamil(data.login.email);
    }
    if (error) {
    }
  }, [loading, data, logedInEmail]);

  const cookie = document.cookie.split("=");

  return (
    <div>
      {cookie[0] === "sessionId" ? (
        <PostInput />
      ) : (
        <LoginInput
          submit={submit}
          handleInputChange={handleInputChange}
          input={input}
        />
      )}
    </div>
  );
};

export default AdminZone;
