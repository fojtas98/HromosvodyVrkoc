import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import connectMongo from "connect-mongo";
import session from "express-session";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const PORT = process.env.PORT || 5005;

const app = express();

const MongoStore = connectMongo(session);

const store = new MongoStore({
  mongooseConnection: mongoose.connection,
});

app.disable("x-powered-by");
app.use(
  session({
    store: store,
    name: "SId",
    resave: false,
    secret: "This is a secret",
    saveUninitialized: false,

    cookie: {
      maxAge: 60 * 1000 * 60 * 2,
      sameSite: false,
    },
  })
);

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: {
      "request.credentials": "include",
      "schema.polling.endpointFilter": "false",
      "schema.polling.interval": 5000,
    },
  },
  context: ({ res, req }) => ({ res, req }),
});

apollo.applyMiddleware({ app });

mongoose
  .connect(
    "mongodb+srv://Fojtas:8yp3OQx4gBVvMWLt@cluster0-v7fow.mongodb.net/test?retryWrites=true&w=majority",
    { dbName: "HromosvodyVrkoc" }
  )
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    throw new Error(err);
  });
