import { gql } from "@apollo/client";

const NEW_EXPENSE = gql`
  mutation newExpense($category: String!, $amount: Int!) {
    newExpense(category: $category, amount: $amount) {
      _id {
        category
      }
      amount
    }
  }
`;

export default NEW_EXPENSE;
