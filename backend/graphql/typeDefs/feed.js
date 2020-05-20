import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllFeed: [Feed]
  }
  extend type Mutation {
    addNewItemToFeed(feedInput: FeedInputData): Feed
    updateItemFeed(feedInput: FeedInputData, _id: String): Boolean
    removeFeedItem(title: String!): Boolean
  }

  type Feed {
    title: String
    description: String
    url: String
    _id: String
  }

  input FeedInputData {
    title: String
    description: String
    file: Upload
  }
`;
