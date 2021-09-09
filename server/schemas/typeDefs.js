const { gql } = require("apollo-server-express");


const typeDefs = gql`
type Query {
    me: User 
  }
    type User {
      _id: ID!
      username: String!
      email: String
      bookCount: Int
      savedBooks: [Book]
    }
    type Auth {
      token: ID!
      user: User


      type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
      }
      

      input bookInput {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String

      }




      type Mutation {
        addUser(username: String! email: String! password: String!): Auth
        login(email: String! password: String!): Auth

        saveBook(bookData: bookInput!): User
        removeBook(bookId: String!): User
      }


`
//not putting the book in book input.  Learned from project that nesting is hell




module.exports = typeDefs;