import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

const login = gql`
  query login($adminInput: adminInputData) {
    login(adminInput: $adminInput) {
      email
    }
  }
`;
const AdminZone = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [postLogin, { data, loading }] = useLazyQuery(login);

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
    postLogin({ variables: input });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={input.email}
        />
        <input
          type="text"
          name="password"
          onChange={handleInputChange}
          value={input.password}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default AdminZone;
