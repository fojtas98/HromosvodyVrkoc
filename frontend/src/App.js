import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Header from "./Header.js";
import Content from "./Content.js";

import "./style.css";

const client = new ApolloClient({
  uri: "http://localhost:5005/graphql",
});

const App = () => {
  const [admin, setAdmin] = useState(false);

  return (
    <div>
      <ApolloProvider client={client}>
        <Header setAdmin={setAdmin} />
        <Content admin={admin} />
      </ApolloProvider>
    </div>
  );
};

export default App;
