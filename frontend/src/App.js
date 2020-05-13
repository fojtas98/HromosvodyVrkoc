import React, { useState } from "react";
import ApolloClient from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import Header from "./Header.js";
import Content from "./Content.js";

import "./styles/index.css";
import "./styles/header.css";
import "./styles/content.css";
import "./styles/footer.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    credentials: "include",
    uri: "http://localhost:5005/graphql",
  }),
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
