import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import connectMongo from "connect-mongo";
import session from "express-session";
import cors from "cors";
require("dotenv").config();

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const PORT = process.env.PORT || 5005;

const app = express();
app.use("/img", express.static("img"));
const MongoStore = connectMongo(session);

const store = new MongoStore({
  mongooseConnection: mongoose.connection,
});

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.disable("x-powered-by");
app.use(
  session({
    store: store,
    name: "sessionId",
    resave: true,
    rolling: true,
    secret: "This is a secret",
    saveUninitialized: false,

    cookie: {
      maxAge: 60 * 1000 * 60 * 2,
      sameSite: false,
      path: "/",
      httpOnly: false,
    },
  })
);

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return new Error(err);
  },
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

apollo.applyMiddleware({ app, cors: false });
// mongoose.set("useFindAndModify", false);
mongoose
  .connect(process.env.DB, { dbName: "HromosvodyVrkoc" })
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    throw new Error(err);
  });
