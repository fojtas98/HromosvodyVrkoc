import React, { useState } from "react";
import ApolloClient from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';
import AdminZone from './AdminZone/AdminZone.js';

import "./index.css";

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
