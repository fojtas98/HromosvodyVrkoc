import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    handleEmails(EmailData: emailInputData): Boolean
  }
  #   extend type Mutation {

  #   }

  input emailInputData {
    obvodBudovy: Int
    vyskaBudovy: Int
    vyskaBudovyKOkapu: Int
    delkaHrebenu: Int
    typStresniKrytiny: String
    antena: Boolean
    zemneni: Boolean
    jmeno: String
    mesto: String
    ulice: String
    tel: Int
    email: String
    poznamky: String
  }
`;
