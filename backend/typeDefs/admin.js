import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    me: admin
    login(adminInput: adminInputData): admin
  }
  extend type Mutation {
    newAdmin(adminInput: adminInputData): admin
  }
  input adminInputData {
    email: String!
    password: String!
  }

  type admin {
    email: String!
  }
`;
