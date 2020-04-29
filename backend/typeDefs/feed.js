import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllFeed: [feed]
  }
  extend type Mutation {
    addNewItemToFeed(feedInput: feedInputData): feed
  }

  type feed {
    title: String
    description: String
    url: String
  }

  input feedInputData {
    title: String
    description: String
    file: Upload
  }
`;
