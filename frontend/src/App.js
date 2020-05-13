import React, { useState } from "react";
import ApolloClient from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header.js";
import Content from "./Content.js";
import AdminZone from "./AdminZone/AdminZone";

import "./styles/index.css";
import "./styles/header.css";
import "./styles/content.css";
import "./styles/footer.css";
import "./styles/adminZone.css";
import Footer from "./Footer.js";

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
      <Router>
        <ApolloProvider client={client}>
          <Header setAdmin={setAdmin} />
          <Switch>
            <Route path="/adminZone" component={AdminZone}></Route>
            <Route path="/" component={Content}></Route>
          </Switch>
          <Footer />
        </ApolloProvider>
      </Router>
    </div>
  );
};

export default App;
