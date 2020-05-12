import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    me: Admin
    login(adminInput: adminInputData): Admin
    logout: Boolean
  }
  extend type Mutation {
    newAdmin(adminInput: adminInputData): Admin
  }
  input adminInputData {
    email: String!
    password: String!
  }

  type Admin {
    email: String!
  }
`;
