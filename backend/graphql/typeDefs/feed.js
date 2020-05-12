import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllFeed: [Feed]
  }
  extend type Mutation {
    addNewItemToFeed(feedInput: feedInputData): Feed

    removeFeedItem(title: String!): Boolean
  }

  type Feed {
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
