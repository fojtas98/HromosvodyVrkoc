import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

const login = gql`
  query login($adminInput: adminInputData) {
    login(adminInput: $adminInput) {
      email
    }
  }
`;

const LoginInput = (props) => {
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

  const submit = async (e) => {
    e.preventDefault();
    await postLogin({ variables: { adminInput: { ...input } } }, data);
  };
  useEffect(() => {
    if (!loading && !error && data) {
      setLogedInEamil(data.login.email);
      props.cookieTest();
    }
    if (error) {
    }
  }, [data, loading, error]);
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={input.email}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={input.password}
          placeholder="heslo"
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginInput;
