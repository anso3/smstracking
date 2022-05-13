import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Expense {
    id: ID!
    category: String!
    amount: Int!
    date: String!
  }

  type Total {
    _id: Category!
    amount: Int!
  }

  type Category {
    category: String!
  }

  type Deleted {
    acknowledged: String!
    deletedCount: Int!
  }

  type Query {
    getExpenses: [Expense]
    getCategory(category: String!): [Expense]
    getTotal: [Total]
  }

  type Mutation {
    newExpense(category: String!, amount: Int!): [Total]
    deleteExpense(id: ID!): Deleted
    updateExpense(id: ID!, category: String, amount: Int): Expense
  }
`;
