import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllFeed: [feed]
  }
  extend type Mutation {
    addNewItemToFeed(file: Upload!): feed
  }

  type feed {
    title: String
    descriptions: String
    pic: String
  }

  input feedInputData {
    title: String
    descriptions: String
    pic: String
  }
`;
