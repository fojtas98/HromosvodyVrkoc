import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllFeed: [feed]
  }
  extend type Mutation {
    addNewItemToFeed(feedInput: feedInputData): feed

    removeFeedItem(title: String!): Boolean
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
