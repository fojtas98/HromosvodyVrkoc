import React, { useState } from "react";

const LoginInput = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input
          type="text"
          name="email"
          onChange={props.handleInputChange}
          value={props.input.email}
        />
        <input
          type="text"
          name="password"
          onChange={props.handleInputChange}
          value={props.input.password}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginInput;
