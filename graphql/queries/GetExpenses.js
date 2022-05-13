import { gql } from "@apollo/client";

const GET_EXPENSES = gql`
  query {
    getExpenses {
      id
      date
      category
      amount
    }
  }
`;

export default GET_EXPENSES;
